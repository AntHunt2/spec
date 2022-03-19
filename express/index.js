// 1、 导入express
const express = require('express')
// 2、创建express服务
const app = express()
app.get('/user', (req, res) => {
    res.send({name: '12345622', sex: '345'}); // 响应客户端
})
app.post('/usersa', (req, res) => {
    res.send('请求成功'); // 响应客户端
})

// 通过req.query获取请求参数
app.get('/', (req, res) => {
    // req.query默认是一个空对象
    res.send(req.query)
})

// 通过req.params获取动态参数
// 多个动态参数 '/params/:id/:name'
app.get('/params/:id', (req, res) => {
    // :id 是动态的参数
    res.send(req.params)
})

app.use(express.static('./clockDemo'))
// http://localhost:80/js/xx.js
// 挂载前缀路径
app.use('/public', express.static('./clockDemo'))
// http://localhost:80/public/js/xx.js

// 3、调用express服务
app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})