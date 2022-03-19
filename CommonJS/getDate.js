const data = require('./date')
// console.log(data.getDate())

const it = require('./itheima-tools/index')
console.log('==============================')
console.log(it.dateFormate())
console.log('==============================')
const h1 = '<h1 title="abc">这是html标签</h1>'
console.log(it.htmlEscap(h1))
console.log('==============================')
const h2 = '&lt;h1 title=&quot;abc&quot;&gt;这是html标签&lt;/h1&gt;'
console.log(it.htmlUnEscape(h2))
console.log('==============================')