const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticat')
const BadRequestError = require('../errors/bad-request')


const AuthUserMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new BadRequestError('the auth header not found')
    }
    const token = authHeader.split(' ')[1]
    
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const {userId, userName, isAdmin} = payload
        if(!isAdmin) {
            req.user = {userId: userId , userName: userName} 
        }
        
        next()
    } catch (error) {
        throw new UnauthenticatedError('user is not authorized')
    }
}

module.exports = AuthUserMiddleware