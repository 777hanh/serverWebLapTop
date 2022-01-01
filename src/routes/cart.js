const express = require('express')
const router = express.Router()

const cartController = require('../app/controllers/cartController')
const verifyToken = require('./../middleware/auth')

router.get('/getcarts', verifyToken, cartController.getAll)
router.post('/add', verifyToken, cartController.addCart)
router.post('/remove', verifyToken, cartController.removeCart)
router.post('/clear', verifyToken, cartController.clearCart)
router.post('/findbyid', verifyToken, cartController.findById)
router.get('/', verifyToken, cartController.getCartByUser)

module.exports = router