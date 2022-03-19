const express = require('express')
const app = express()
// 1、引入路由模块
const router = require('./router')
// 2、将router挂载到app
// app.use(router)
app.use('/api', router) // 为路由模块添加统一前缀
app.listen(80, () => {
    console.log('http://127.0.0.1')
})