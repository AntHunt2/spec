
// 获取时间
function dateFormate() {
    const date = new Date();
    const y = outZoo(date.getFullYear());
    const ms = outZoo(date.getMonth() + 1);
    const d = outZoo(date.getDay());
    const h = outZoo(date.getHours());
    const m = outZoo(date.getMilliseconds());
    const s = outZoo(date.getSeconds());
 
    return `${y}-${ms}-${d} ${h}:${m}:${s}` 
}
// 日期时间格式小于9的前面补0
function outZoo(num) {
    return num > 9 ? num : '0' + num
}

module.exports = {
    dateFormate
}