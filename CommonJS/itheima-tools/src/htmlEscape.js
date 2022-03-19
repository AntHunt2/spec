// 定义转义HTML的函数
function htmlEscap(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>': 
                return '&gt;'
            case '"': 
                return '&quot;'
            default:
                break;
        }
    })
}
// 定义还原HTML的函数
function htmlUnEscape(htmlstr) {
    return htmlstr.replace(/&lt;|&gt;|&quot;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            default:
                break;
        }
    })
}
module.exports = {
    htmlEscap,
    htmlUnEscape
}