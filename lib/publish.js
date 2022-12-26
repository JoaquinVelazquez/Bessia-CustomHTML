const fs = require('fs')
const archiver = require('archiver')

let scriptHbsFilePath = './views/partials/scripts.hbs'
let scriptsFile = fs.readFileSync(scriptHbsFilePath);

let prodWidgetsFilePath = './views/partials/widgets.json'

function createWidget(url, index, remote = false) {
    let code, src;
    if (remote) {
        code = ''
        src = url
    } else {
        src = ''
        code = fs.readFileSync(`./static/${url}`).toString()
    }

    return {
        code: code,
        src: src,
        priority: 10,
        key: `widget-${index}`
    }
};

const getUrlsFromScriptsFile = () => {
    return scriptsFile.toString().split("\n").map(url => {
        if (url.length) {
            const scriptSplit = url.split('src=')
            const urlSplit = scriptSplit[1] && scriptSplit[1].split('\'');
            return urlSplit && urlSplit[1] ? urlSplit[1] : undefined;
        }
    })
}

const createWidgetsFile = () => {
    const widgets = []
    const urls = getUrlsFromScriptsFile();
    urls.forEach((url, i) => {
        if (url) {
            if (url.startsWith("http")) { // support for http/s
                widget = createWidget(url, i, true)
            } else {
                widget = createWidget(url, i, false)
            }
            widgets.push(widget)
        }
    });

    // Write Widgets.json file
    if (fs.existsSync(prodWidgetsFilePath)) {
        fs.unlinkSync(prodWidgetsFilePath)
    }

    fs.writeFileSync(prodWidgetsFilePath, JSON.stringify(widgets))
    console.log(' -- WIDGETS SUCCESFULLY GENERATED')
}

const copyStylesLayout = () => {
    fs.copyFileSync('./static/layout_styles.css', './views/partials/layout_styles.css')
    console.log(' -- STYLES LAYOUT SUCCESFULLY COPIED')
}

const createZipFile = () => {
    let writeStream = fs.createWriteStream('custom-html.zip')
    let zipper = archiver('zip')

    writeStream.on('close', () => {
        console.log('***** Successfully written the ZIP file. Please upload it on Mercado Shops Custom HTML configuration page. ****')
    })

    zipper.pipe(writeStream)
    zipper.glob('**/*', {
        cwd: './views/partials/',
        ignore: ['.DS_Store']
    })

    zipper.finalize()
}

function publish() {
    console.log('***** STARTING ZIP FILE CREATION ******');

    if (fs.existsSync('./custom-html.zip')) {
        fs.unlinkSync('./custom-html.zip')
    }

    createWidgetsFile();
    copyStylesLayout();
    createZipFile();
}

publish();
