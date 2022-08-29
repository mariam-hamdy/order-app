const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide the user']
    },
    totalPrice: {
        type: Number,
        required: [true, 'please provide the order total price']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['accepted', 'rejected'],
        default: 'accepted'
    }
})

module.exports = mongoose.model('Order', OrderSchema)