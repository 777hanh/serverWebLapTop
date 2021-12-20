const express = require('express')
const router = express.Router()
const staffController = require('../app/controllers/staffController')

router.post('/getusers', staffController.getAll)
router.post('/login', staffController.login)
router.post('/register', staffController.register)

module.exports = router