const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const UnauthenticatedError = require('../errors/unauthenticat')
const Order = require('../models/order')
const User = require('../models/user')

const createOrder = async(req,res) => {
    const {user_id, totalPrice} = req.body
}

module.exports = createOrder