const http = require('http')
// 1、创建基础服务
const server = http.createServer()
// 2、监听客户端请求
server.on('request', (req, res) => {
    // console.log(req.method) // 请求类型
    // console.log(req.url) // 请求地址
    // res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'}); // 解决返回中文乱码问题
    // const resCont = `您的请求类型是${req.method},请求地址是${req.url}`;
    // res.end(resCont)
    // 通过不通的url返回不同的html
    // 1、获取请求的url，根据不同的url跳转不同的页面
    let new_url = req.url
    // 2、设置字符格式
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 2、设置默认的页面，404 Not found
    // 3、判断用户请求的是否为/或/index.html首页
    if(new_url === '/' || new_url === '/index.html') {
        resContent = '首页'
    } else if(new_url === '/about.html'){
        resContent = 'about'
    } else {
        resContent = '404'
    }
    // 4、判断用户请求的是否为about页面
    // 6、响应内容
        res.end(resContent)
})
// 3、启动服务器 server.listen(parm1, parm2)
/**
 * parm1: 端口号
 * parm2: 成功回调
 */
server.listen(80, () => {
    console.log('http Server runing at http://127.0.0.1')
})