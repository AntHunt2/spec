const express = require('express')
let router = express.Router()
router.get('/get', (req, res) => {
    res.send('get请求')
})
router.post('/post', (req, res) => {
    res.send('post请求')
})
module.exports = router