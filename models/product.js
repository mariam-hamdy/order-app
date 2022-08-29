const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: [true, 'please provide the product name']
    },
    price: {
        type: Number,
        required: [true, 'please provide the product price']
    },
    quantity: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Product', ProductSchema)