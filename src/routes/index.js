const authUser = require('./authUser')
const authStaff = require('./authStaff')
const product = require('./product')
const favourite = require('./favourite')
const cart = require('./cart')

function route(app) {
    //route for customer (user)
    app.use('/api/user', authUser)

    //route for admin
    app.use('/api/staff', authStaff)

    //route for product
    app.use('/api/product', product)

    //route for favourite
    app.use('/api/favourite', favourite)

    //route for cart
    app.use('/api/cart', cart)
}

module.exports = route