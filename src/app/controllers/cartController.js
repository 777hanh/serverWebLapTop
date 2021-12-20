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
            .then(cart => res.json({ success: true, message: 'nice (>.<)', carts:cart }))
            .catch(err => res.json({ success: false, message: err.message }).status(400))
    }

    //get cart by userId
    async getCartByUser(req, res) {
        await Cart.findOne({ userCart: req.body.userId })
            .then(cart => res.json({ success: true, message: 'nice (>.<)', cart }))
            .catch(err => res.json({ success: false, message: err.message }))
    }


    //add cart product
    //api/cart/add
    async addCart(req, res) {
        // const { productCart } = req.body
        // if (!productCart)
        //     return res.json({ success: false, message: 'missing productCart' })

        // const cart = await Cart.findOne({ userCart: req.body.userId })
        // //user is not already have a favourite list
        // if (!cart) {
        //     const newCart = new Cart({
        //         userCart: req.body.userId,
        //         productCart,
        //     })
        //     newCart.save()
        //         .then(() => res.json({ success: true, message: 'Add new cart successfull (>.<)', newCart }))
        //         .catch((err) => res.json({ success: false, message: err.message }))
        //     // return res.send('nice')
        //     return
        // }
        // //user is already have
        // //check product is in the favorite list
        // if (!cart.productCart.includes(productCart)) {
        //     cart.productCart.push(productCart)
        //     cart.save()
        //     return res.json({ success: true, message: 'add favourites successfull (>.<)', cart })
        // }

        // return res.json({ success: false, message: 'product is already in the favorite list' })

    }


    //remove cart product
    //api/cart/remove
    async removeFavourite(req, res) {
        // const { productCart } = req.body
        // if (!productCart)
        //     return res.json({ success: false, message: 'missing productFavourite' })

        // const cart = await Cart.findOne({ userCart: req.body.userId })
        // //user is not already have a favourite list
        // if (!cart)
        //     return res.json({ success: false, message: 'user have not favourite list' })

        // //user already have
        // //check product is not in the favorite list
        // if (!cart.productCart.includes(productCart))
        //     return res.json({ success: false, message: 'the product is not in your favourite list' })

        // //the product is in the favorite list
        // cart.productCart = cart.productCart.filter(product => {
        //     return product !== req.body.productCart
        // })
        // cart.save()
        //     .then(() => res.json({ success: true, message: 'remove successfull (>.<)', favourite}))
        //     .catch(err => res.json({ success: false, message: err.message }))
    }
}

module.exports = new CartController