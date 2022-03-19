// 读取本地资源
// 1、引入node相关模块
const fs = require('fs')
const http = require('http')
const path = require('path')
// 2、创建服务
const serve = http.createServer()
serve.on('request', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    const url = req.url;
    // const fpath = path.join(__dirname, url)
    let fpath = ''
    // 定义默认访问页面
    if(url === '/') {
        fpath = path.join(__dirname, 'clockDemo/index.html')
    } else {
        fpath = path.join(__dirname, '/clockDemo', url)
    }
    console.log(fpath)
    fs.readFile(fpath, 'utf8', function(error, data) {
        if(error) {
            return res.end('读取文件失败')
        } else {
            // console.log('读取文件成功', data)
            
            // res.end(data)
            res.end(data)
        }
    })
})
serve.listen('80', () => {
    console.log('create serve http://127.0.0.1')
})
// 3、将资源的请求url地址映射为文件的存放路径
// 4、读取本地文件并返回给浏览器
// 5、优化资源资源的路径