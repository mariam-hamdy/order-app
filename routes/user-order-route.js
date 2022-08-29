const express = require('express')
const router = express.Router()
const getUserOrders = require('../controllers/user-order-controller')
const AuthUserMiddleware = require('../middleware/auth-user-middleware')

router.route('/').get(AuthUserMiddleware ,getUserOrders)

module.exports = router