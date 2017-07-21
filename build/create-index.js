let fs = require('fs');
let path = require('path');
const cheerio = require('cheerio');

let distPath = path.resolve(__dirname, "../dist");
let htmlPath = path.resolve(__dirname, "../src/index.html");
let fileList = [];

function getDistFileName() {
    let dirList = fs.readdirSync(distPath);
    dirList.forEach(f => {
        if(/\.js$/.test(f)) {
            fileList.push(f);
        }
    });

    getHtmlFile();
};

function getHtmlFile() {
    fs.readFile(htmlPath, (err, data) => {
        if (err) throw err;

        const d = cheerio.load(data.toString());//当前的$,它是拿到了整个body的前端选择器
        d('head').append(`<script src="./${fileList[1]}"></script>`);
        d('body script').remove();
        d('body').append(`<script src="./${fileList[0]}"></script>`);

        fs.writeFile(distPath + '/index.html', d.html(), (err) => {
            if (err) throw err;
            console.log('index.html 文件已经生成');
        });
    })
}

getDistFileName();