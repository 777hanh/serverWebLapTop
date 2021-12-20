const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    nameProduct: { type: 'string', required: true },
    priceProduct: { type: 'number', default:0, },
    imageProduct: { type: 'string', default: '', },
    description: {
        brand: { type: 'string', default: '', },
        category: { type: 'string', default: '', },
        cpu: { type: 'string', default: '', },
        ram: { type: 'string', default: '', },
        battery: { type: 'string', default: '', },
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', Product)