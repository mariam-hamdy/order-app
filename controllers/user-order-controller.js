const {StatusCodes} = require('http-status-codes')
const User = require('../models/user')
const Order = require('../models/order')

const getUserOrders = async(req, res) => {
    const userId = req.user.userId
    const orders = await Order.find({user_id: userId}).populate('user_id','firstName middleName')
    res.status(StatusCodes.OK).json({orders, count: orders.length})

}

module.exports = getUserOrders