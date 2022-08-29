const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const UnauthenticatedError = require('../errors/unauthenticat')
const NotFoundError = require('../errors/not-found')
const Order = require('../models/order')
const User = require('../models/user')

const createOrder = async(req,res) => {
    const {user_id, totalPrice} = req.body
    if(!user_id || !totalPrice) {
        throw new BadRequestError('please provide the data')
    }
    const user = await User.findById(user_id)
    if(!user) {
        throw new NotFoundError('the user_id is uncorrect')
    }
    const order = await Order.create({...req.body})
    res.status(StatusCodes.CREATED).json({success: true, order})
}

const changeStatus = async(req,res) => {
   const status = req.body.status
   const orderId = req.params.id
   if(!status) {
     throw new BadRequestError('please provide the status')
   }
   const options = ['accepted', 'rejected']
   if(!options.includes(status)) {
      throw new BadRequestError('please provide the right option')
   }
   const order = await Order.findByIdAndUpdate({_id: orderId}, {...req.body}, 
    {runValidators: true, new:true})
    if(!order) {
        throw new NotFoundError('the provided orderId not found')
    }
    return res.status(StatusCodes.OK).json({order})
  
}

module.exports = {
    createOrder,
    changeStatus
}