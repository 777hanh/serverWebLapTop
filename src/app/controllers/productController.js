// const { findOneAndUpdate } = require('../models/product.js');
const Product = require('../models/product.js');


class ProductController {
    //Get all products
    //api/product/getproducts
    async getAll(req, res) {
        await Product.find({})
            .then(products => res.json({ success: true, message: 'nice (>.<)', products }))
            .catch(() =>
                res.json({
                    success: false,
                    message: 'something is broke with get all products'
                }).status(400))

    }

    //findById
    //api/product/find/:id
    async findProduct(req, res) {
        await Product.findOne({ _id: req.params.id })
            .then(product => res.json({ success: true, message: '(>.<)', product }))
            .catch(() => res.json({ success: false, message: 'not found', id: req.params.id }))
    }

    //Create product
    //api/product/create
    async createProduct(req, res) {
        const { nameProduct } = req.body
        if (!nameProduct)
            return res.json({ success: false, message: 'Name of product is missing' }).status(400).status(400)
        try {
            const isProduct = await Product.findOne({ nameProduct: req.body.nameProduct })
            if (isProduct)
                return res.json({ success: false, message: 'This name is already' }).status(400)
            if (!req.body.priceProduct)
                req.body.priceProduct = 0
            const newProduct = Product(req.body)
            await newProduct.save()
            return res.json({ success: true, message: 'nice (>.<)', newProduct })
        } catch (error) {
            return res.json({ success: false, message: error || error.message })
        }
    }

    //update product
    //api/product/update/:id
    async updateProduct(req, res, next) {
        const { nameProduct } = req.body
        if (!nameProduct)
            return res.json({ success: false, message: 'Name of product is missing' }).status(400)
        try {
            await Product.findOne({ _id: req.params.id })
                .then(product => {
                    if (!req.body.priceProduct)
                        req.body.priceProduct = 0
                    const productUpdate = req.body
                    Product.findOneAndUpdate({ _id: req.params.id }, productUpdate)
                        .then(() => res.json({ success: true, message: 'nice (>.<) update successfully', productUpdate }))
                        .catch(() =>
                            res.json({ success: false, message: 'not found product' }).status(404)
                        )
                })
        } catch (error) {
            return res.json({ success: false, message: error.message }).status(400)
        }
    }

    //delete product
    //api/product/delete/:id
    async deleteProduct(req, res) {
        await Product.findOneAndDelete({ _id: req.params.id })
            .then(product => {
                if (product)
                    return res.json({ success: true, message: 'nice (>.<)' })
                return res.json({ success: false, message: 'not found product' }).status(404)
            })
            .catch(() =>
                res.json({ success: false, message: 'not found product' }).status(404)
            )
    }

}

module.exports = new ProductController