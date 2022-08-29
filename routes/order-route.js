const express = require('express')
const router = express.Router()
const {
    createOrder,
    changeStatus
} = require('../controllers/order-controller')

const AuthAdminMiddleware = require('../middleware/auth-admin-middleware')
const AuthUserMiddleware =require('../middleware/auth-user-middleware')

router.route('/').post(AuthUserMiddleware ,createOrder)
router.route('/admin/status/:id').patch(AuthAdminMiddleware, changeStatus)


module.exports = router