const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Staff = new Schema({
    fullName: { type: 'string', required: true },
    phone: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    location: { type: 'string', default:'', },
    email: { type: 'string', default:'', },
    profilePicture: { type: 'string', default:'', },
    birthday: { type: 'string', },
    role: { type: 'string', enum:['KHO', 'KETOAN', 'SHIPPER', 'NONE'], default: 'NONE'},
}, {
    timestamps: true
})

module.exports = mongoose.model('Staff', Staff)