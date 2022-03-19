// 包的入口文件
const data = require('./src/dateFormate')
const htmlEscap = require('./src/htmlEscape')



module.exports = {
    ...data,
    ...htmlEscap
}