const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

router.post('/getUsers', userController.getAll)
router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports = router