const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/productController')

router.get('/getproducts', productController.getAll)
router.post('/create', productController.createProduct)
router.post('/update/:id', productController.updateProduct)
router.get('/find/:id', productController.findProduct)
router.post('/delete/:id', productController.deleteProduct)

module.exports = router