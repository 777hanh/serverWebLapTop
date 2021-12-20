const Cart = require('./../models/cart')

class CartController {
    //getall.
    //getFavouriteByUser (phone)
    //createFavourite
    //deleteFavourite when click remove favourite or delete user or delete product




    //get all favourite
    //api/cart/getcarts
    async getAll(req, res) {
        await Cart.find({})
            .then(cart => res.json({ success: true, message: 'nice (>.<)', carts: cart }))
            .catch(err => res.json({ success: false, message: err.message }).status(400))
    }

    //get cart by userId
    async getCartByUser(req, res) {
        await Cart.find({ userCart: req.body.userId })
            .then(cart => res.json({ success: true, message: 'nice (>.<)', cart }))
            .catch(err => res.json({ success: false, message: err.message }))
    }


    //add cart product
    //api/cart/add
    async addCart(req, res) {
        const { productCart } = req.body
        if (!productCart)
            return res.json({ success: false, message: 'missing productCart' })

        let cart = await Cart.findOne({ userCart: req.body.userId, productCart })
        // //user is not already have a cart with this product
        if (!cart) {
            const newCart = new Cart({
                userCart: req.body.userId,
                countProductCart: req.body.countProductCart || 1,
                productCart,
            })
            newCart.save()
                .then(() => res.json({ success: true, message: 'Add new cart successfull (>.<)', newCart }))
                .catch((err) => res.json({ success: false, message: err.message }))
            // return res.send('nice')
            return
        }

        //update cart count product
        // //user is already have cart with this product
        if (!req.body.countProductCart) {
            req.body.countProductCart = cart.countProductCart + 1
        }
        else { req.body.countProductCart = req.body.countProductCart + cart.countProductCart }
        req.body.countProductCart = req.body.countProductCart < 0 ? 0 : req.body.countProductCart
        const updateCart = req.body
        // return res.json(updateCart)
        Cart.findOneAndUpdate({ userCart: req.body.userId, productCart }, updateCart)
            .then(() => res.json({ success: true, message: 'add product to cart successfully (>.<)', updateCart }))
            .catch((err) => res.json({ success: false, message: err.message }))

    }


    //remove cart product
    //api/cart/remove
    async removeCart(req, res) {
        const { productCart } = req.body
        if (!productCart)
            return res.json({ success: false, message: 'missing productFavourite' })

        await Cart.findOneAndDelete({ userCart: req.body.userId, productCart })
            .then((cart) => res.json({ success: true, message: 'delete successfully product from your cart', cart }))
            .catch((err) => res.json({ success: false, message: err.message }))
    }

    //clear cart 
    //api/cart/clear
    async clearCart(req, res) {
        try {
            await Cart.deleteMany({ userCart: req.body.userId })
            .then(() => res.json({ success: true, message: 'clear cart successfully (>.<)', userCart: req.body.userId}))
            .catch((err) => res.json({ success: false, message: err.message }))
        } catch (error) {
            return res.json({ success: false, message:error.message})
        }

    }
}

module.exports = new CartController