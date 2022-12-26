const fs = require('fs');
const Path = require('path');

const staticPath = './static';
const widgetFilePath = './views/partials/widgets.json';
const widgetsOutputPath = './static/js';

const scriptsPartialPath = './views/partials/scripts.hbs';
const layoutStylesFilePath = './views/partials/layout_styles.css';

let widgetsJson = JSON.parse(fs.readFileSync(widgetFilePath));

const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(file => {
        const curPath = Path.join(path, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
};

const cleanUp = () => {
    deleteFolderRecursive(staticPath);
    deleteFolderRecursive(widgetsOutputPath);
    if (fs.existsSync(scriptsPartialPath)) {
        fs.unlinkSync(scriptsPartialPath);
    }

    console.log(' -- CLEAN-UP DONE');
}

const createDir = (dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    console.log(` -- CREATING DIR ${dir} DONE`);
}

const createJsFiles = () => {
    widgetsJson.forEach(widget => {
        let scriptContent;
        if (widget.src.length > 0) {
            scriptContent = `<script src='${widget.src}'></script>`
        }

        if (widget.code.length > 0) {
            fs.writeFileSync(`${widgetsOutputPath}/${widget.key}.js`, widget.code)
            scriptContent = `<script src='js/${widget.key}.js'></script>`
        }

        fs.appendFileSync(scriptsPartialPath, scriptContent + '\r\n');
    });

    console.log(' -- CREATING JS FILES DONE');
}

const copyLayoutStyles = () => {
    fs.copyFileSync(layoutStylesFilePath, `${staticPath}/layout_styles.css`)

    console.log(' -- COPING STYLES DONE')
}

console.log('****** STARTING WARM-UP APPLICATION ********');

cleanUp();
createDir(staticPath);
createDir(widgetsOutputPath);
createJsFiles();
copyLayoutStyles();
