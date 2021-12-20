const express = require('express')
const router = express.Router()
const cartController = require('../app/controllers/cartController')

router.get('/getcarts', cartController.getAll)
router.post('/add',cartController.addCart)
router.post('/remove',cartController.removeFavourite)
router.get('/', cartController.getCartByUser)

module.exports = router