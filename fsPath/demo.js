const fs = require('fs')
const path = require('path')
const style = /<style>[\s\S]*<\/style>/
const script = /<script>[\s\S]*<\/script>/
// 1、读取index.html
fs.readFile(path.join(__dirname) + '/index.html', 'utf-8', function(error, dataStr){
    if(error) {
        return '读取文件失败' + error
    }
    // 2、读取成功后，分别解析html、css、js
    // resolveCss(dataStr)
    // resolveJs(dataStr)
    resolveHtml(dataStr)
    // console.log('读取文件成功')
})

function resolveCss(HtmlStr) {
    const r1 = style.exec(HtmlStr)
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clockDemo/index.css'), newCss, function(err) {
        if(err) {
            return '写入失败' + err
        }
        console.log('写入成功')
    })
}
function resolveJs(HtmlStr) {
    const r2 = script.exec(HtmlStr)
    const newJs = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clockDemo/index.js'), newJs, function(err) {
        if(err) {
            return '写入失败js' + err
        }
        console.log('写入成功js')
    })
}
// 定义处理HTML结构的方法
function resolveHtml(HtmlStr) {
    // 1、将字符串调用replace方法，把内嵌的style和script替换为外联的link和script标签
    console.log(HtmlStr)
    const newHtml = HtmlStr.replace(style, "<link rel='stylesheet' href='./index.css'></link>").replace(script, "<script src='./index.js'></script>")
    console.log(newHtml)
    fs.writeFile(path.join(__dirname, './clockDemo/index.html'), newHtml, function(error) {
        if(error) {
            return console.log('存入html失败', error.message)
        }
        console.log('写入html成功')
    })
}