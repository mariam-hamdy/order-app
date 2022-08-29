const mongoose = require('mongoose')

const OrderDetailSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: [true, 'please provide the order']
    },
    quantity: {
        type: Number,
        required: [true, 'please provide the order quantity']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('OrderDetail', OrderDetailSchema)