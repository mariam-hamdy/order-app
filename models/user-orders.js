const mongoose = require('mongoose')

const UserOrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('UserOrder', UserOrderSchema)