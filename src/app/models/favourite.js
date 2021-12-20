const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Favourite = new Schema({
    //id product
    //id user
    productFavourite: [{ type: String, ref: 'Product', required: true,}],
    userFavourite: { type: 'string', ref: 'User', required: true,},
    // userCart: { type: 'string', default: '', },
}, {
    timestamps: true
})

module.exports = mongoose.model('Favourite', Favourite)