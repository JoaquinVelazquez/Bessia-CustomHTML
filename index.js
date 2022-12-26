const express = require('express');
const http = require('http');
const handlebars = require('express-handlebars');
const ws = require('ws');
const path = require('path');
const uuid = require('uuid/v4');
const opn = require('opn');
const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');
const sass = require('node-sass');
const watcher = require('./lib/watch');

let data = require('./mock');

const app = express();

const getTheme = () => {
  const routeviews = path.join(__dirname, 'views')
  let theme = ['views/partials/'];
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.resolve(routeviews, 'partials'),
      (err, files) => {
        if (err) reject(err);
        const templates = files.filter(f => !f.includes('.') && f !== 'components' && f !== 'icons').map(f => `views/partials/${f}/`);
        resolve([...theme, ...templates]);
      }
    );
  });
};

async function start() {
  let connections = [];
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(app);
  const wss = new ws.Server({ server });
  const startServerSpinner = ora('Starting server').start();

  const pathThemes = await getTheme()

  app.use(express.static(path.join(__dirname, 'static')));
  app.engine(
    'hbs',
    handlebars({
      extname: '.hbs',
      partialsDir: pathThemes,
      helpers: {
        toJSON(object) {
          return JSON.stringify(object);
        },
        concat() {
          arguments = [...arguments].slice(0, -1);
          return arguments.join('');
        }
      }
    })
  );
  app.set('view engine', '.hbs');

  app.get('/', function (req, res) {
    res.render('default', data.dataMock);
  });

  server.listen(PORT, () => {
    startServerSpinner.succeed(`Ready on ${chalk.cyan('http://localhost' + PORT)}`);
    const connectionsSpinner = ora('Checking for open hotreload connections').start();

    setTimeout(() => {
      if (!connections.length) {
        connectionsSpinner.info('0 hotreload connections found, opening a new tab');
        opn(`http://localhost:${PORT}`);
      } else {
        connectionsSpinner.info(`${connections.length} hotreload connections found`);
      }
    }, 5500);
  });

  watcher((type, file) => {
    console.log(`[${chalk.blue(type)}] > ${file}`);

    if (file === 'mock.js') {
      delete require.cache[require.resolve('./mock.js')];
      data = require('./mock.js');
    }

    if (file.match(/^views\/partials\/\w+\/styles\/(\w|-|\/)+\.scss$/)) {
      const templateName = file.split('/')[2];
      compileStyles(templateName);
    }

    for (const { socket } of connections) {
      socket.send(`[${type}] > ${file}`);
    }
  });

  async function compileStyles(templateName) {
    console.log("template" + templateName);
    const stylesPath = `views/partials/${templateName}/styles`;
    const file = `${stylesPath}/main.scss`;
    if (fs.existsSync(file)) {
      sass.render(
        {
          file,
          includePaths: [stylesPath],
          outputStyle: 'compressed'
        },
        (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFileSync(path.join(__dirname, 'static', templateName + '.css'), result.css);
        }
      );
    }
  }

  wss.on('connection', socket => {
    const id = uuid();
    connections.push({ id, socket });
    socket.on('close', () => {
      connections = connections.filter(({ id: socketId }) => socketId !== id);
    });
  });

}

start()

module.exports = app;