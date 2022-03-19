### 学习目标：

    1、能够使用express.static()快速托管静态资源
    2、能够使用express路由精简项目结构
    3、能够使用常用的express中间件
    4、能够使用express创建API接口
    5、能够在express中启用cors跨域资源共享

### 什么是 Express

    官方：Express是基于Node.js平台，快速、开放、极简的web开发框架
    通俗：Express的作用和Node.js中内置的http模块类似，是专门用来创建web服务器的。

### 使用express.static()快速托管静态资源
    通过express.static可以非常快速的创建一个静态资源服务器。
    例如：
        const express = require('express')
        const app = express()
        app.use(express.static('public'))
    将public目录下的js、css、img对外开发访问了。
    http://localhost:80/js/xx.js
    http://localhost:80/css/xx.css
    http://localhost:80/img/xx.png

    注意：express在指定的静态目录中查找文件，并对外提供资源的访问路径。
        因此存放静态文件的目录名不会出现在url中。

    如果需要托管多个静态资源目录，多次调用express.static()即可
    app.use(express.static('public'))
    app.use(express.static('xxx'))

### nodemon 提供node热启动的工具
    安装：npm i -g nodemon
    
    将node替换成nodemon
    启动：nodemon index.js

### Exprees路由
    路由是指客户端请求与服务器处理函数之间的映射关系
    Express中的路由包括三部分
        请求类型
        请求的URL地址
        处理函数
    路由的匹配过程
        按照定义的先后顺序匹配
        请求类型和请求URL同时匹配成功，才会调用对应的处理函数
    模块化路由
        1、创建路由模块对应的js文件
        2、调用express.Router()函数创建路由对象
        3、向路由对象上挂载具体路由
        4、使用module.exports向外共享路由对象
        5、使用app.use()函数注册路由模块

    app.use()作用注册全局中间件

    为路由模块添加前缀
    app.use('/api', router)

### 中间件
    1、业务处理的中间模块
    2、有输入有输出

    Express中间件，本质上就是一个function函数。
    注意：中间件形参列表中，必须包含next函数，而路由处理函数中只包含req和res 
    
    中间件的作用就是对请求进行预处理

    next函数的作用
    next函数是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或路由。

    定义一个中间件函数
    mw 
