const express = require('express')
const router = express.Router()
const {
    signUp,
    signIn
} = require('../controllers/auth-controller')

router.route('/register').post(signUp)
router.route('/login').post(signIn)

module.exports = router