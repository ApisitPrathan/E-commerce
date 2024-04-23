const express = require('express') // import module express
const app = express() // ใช้ตัวแปร app เป็นตัวดำเนินการ express
const router = require('./modules/router') // import module router

app.use(router) // ให้ express เรียกใช้ router

app.listen(3000,() => {
    console.log(`start server : 3000`)
})