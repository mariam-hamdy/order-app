const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const UnauthenticatedError = require('../errors/unauthenticat')
const User = require('../models/user')


const signUp = async(req, res) => {
    const {firstName, middleName, lastName, email, password} = req.body
    if(!firstName || !middleName || !lastName || !email || !password) {
        throw new BadRequestError('please provide the full data')
    }
    const user = await User.create({...req.body})
    const token = user.generateToken()
    res.status(StatusCodes.CREATED).json({sucess:`hello ${user.firstName}`, token})
}

const signIn = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        throw new BadRequestError('please provide email or password')
    }
    const user = await User.findOne({email})
    if(!user) {
        throw new UnauthenticatedError('the email or password not found')
    }
    const isSame = await user.comparePassword(password)
    if(!isSame) {
        throw new UnauthenticatedError('the email or password not found')
    }
    const token = user.generateToken()
    res.status(StatusCodes.OK).json({sucess:`hello ${user.firstName}`, token})
}


module.exports = {
    signUp,
    signIn
}