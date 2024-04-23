// จัดการ routing ของโปรเจค
const express = require('express') // import mudule express
const router = express.Router() // สร้าง oject จาก class Router ที่อยู่ใน module Express

router.get('/',(req,res) => {// set router หน้าแรก 
    res.send('hello')
})

module.exports = router // export module router