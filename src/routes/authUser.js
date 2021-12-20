const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')

router.post('/getusers', userController.getAll)
router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports = router