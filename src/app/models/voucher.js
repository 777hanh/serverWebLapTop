const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voucherSchema = new Schema({
    code: { type: 'string', required: true, unique: true  },
    image: { type: 'string', default: ''},
    date: { type: 'date', default: Date.now() },
}, {
    timestamps: true
})

module.exports = mongoose.model('Voucher', voucherSchema)