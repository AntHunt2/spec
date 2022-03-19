let a = '123'
let obj = {
    parm1: 'obj1',
    parm2: 'obj1',
    parm3: 'obj1'
}
function outModule() {
    console.log('向外暴露函数')
}
// 最用共享的结果都是以modules.exports指向的对象为准
module.exports = {
    a,obj,outModule
}
module.exports.name = '张三'
exports.test = '12344555'
// 永远都是以modules.exports指向的对象为准




// console.log(module)
// {
//     id: '/Users/chengli/node/CommonJS/module.js',
//     path: '/Users/chengli/node/CommonJS',
//     exports: {},
//     filename: '/Users/chengli/node/CommonJS/module.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/chengli/node/CommonJS/node_modules',
//       '/Users/chengli/node/node_modules',
//       '/Users/chengli/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

