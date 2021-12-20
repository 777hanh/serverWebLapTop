const express = require('express')
const router = express.Router()
const staffController = require('../app/controllers/StaffController')

router.post('/getUsers', staffController.getAll)
router.post('/login', staffController.login)
router.post('/register', staffController.register)

module.exports = router