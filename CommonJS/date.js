function getDate() {
    const dt = new Date()
    const y = dt.getFullYear()
    const m = formdate(dt.getMonth() + 1)
    const d = formdate(dt.getDay())
    const hh = formdate(dt.getHours())
    const mm = formdate(dt.getMinutes())
    const ss = formdate(dt.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function formdate(date) {
    return date > 9 ? date : '0'+date
}
module.exports = {
    getDate
}