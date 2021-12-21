const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/productController')
const verifyToken = require('./../middleware/auth')

router.get('/getproducts', productController.getAll)
router.post('/create', verifyToken, productController.createProduct)
router.post('/update/:id', verifyToken, productController.updateProduct)
router.get('/find/:id', productController.findProduct)
router.post('/delete/:id',verifyToken, productController.deleteProduct)

module.exports = router