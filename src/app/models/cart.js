const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    productCart: { type: 'string',ref:'Product', default: '',  },
    countProductCart: {type : 'number', default:1},
    userCart: { type: 'string',ref: 'User', default: '', },
    }, {
    timestamps: true
})

module.exports = mongoose.model('Cart', Cart)