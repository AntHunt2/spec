const path = require('path')
const fs = require('fs')
// path模块是用来处理路径的一个模块，提供了一系列方法和属性，用来满足客户对路径处理的需求
// path.join() // 用来将多个路径片段拼接成一个完整的路径字符串
// fs.writeFile(path.join(__dirname, 'index.txt'), '__dirname:获取当前目录', 'utf-8', (error, success) => {
//     if (error) {
//         console.log('输入文件失败')
//         return
//     }
//     console.log('输入文件成功', success)
//  })

//  注意： ../ 会合并上一层目录
// const addres = path.join('/a', '/b', '/c/d', '../', './e', 'f')
// console.log(addres) // /a/b/c/e/f
// -----------------------------------
// path.basename() // 用来从路径字符串中，将文件名解析出来

// const name = '/a/b/c/d/index.html'
// const fullname = path.basename(name)
// console.log(fullname) // index.html

// const name = '/a/b/c/d/index.html'
// const fullname = path.basename(name, '.html')
// console.log(fullname) // index
// -----------------------------------
// 如何获取路径中的文件扩展名 path.extname
// const name = '/a/b/c/d/index.html'
// const extname = path.extname(name)
// console.log(extname)

