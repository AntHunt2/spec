const fs = require("fs");
/**
 * readFile: 读取文件
 * 参数1: 必填，文件路径
 * 参数2: 选填，字符格式，默认utf-8
 * 参数3: 回调函数（失败，成功）
 */
fs.readFile('./index.txt', 'utf-8', function(error, dataStr) {
    // console.log(dataStr)
    // console.log(error)
})

/**
 * writeFile: 向指定文件写入内容
 * 参数1: 文件路径
 * 参数2: 写入内容
 * 参数3: 选填，字符格式，默认utf-8
 * 参数4: 回调函数（失败，成功）
 */
 fs.writeFile('./index.txt', 'writeFile：向指定文件写入内容', 'utf-8', function(error, dataStr) {
    // console.log(dataStr)
    // console.log(error)
})
// __dirname: 获取当前文件目录
// console.log(__dirname)
fs.writeFile(__dirname + 'index.txt', '__dirname:获取当前目录', 'utf-8', (error, success) => {
   if (error) {
       console.log('输入文件失败')
       return
   }
   console.log('输入文件成功')
})