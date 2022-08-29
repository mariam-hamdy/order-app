const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please provide the first name']
    },
    middleName: {
        type: String,
        required: [true, 'please provide the middle name']
    },
    lastName: {
        type: String,
        required: [true, 'please provide the last name']
    },
    email: {
        type: String,
        required: [true,'please provide the email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide the password'],
        minlenght: 4
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    token: {
        type: String,
        default: ''
    }
})

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    this.token = this.generateToken()
    next()
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isSame = await bcrypt.compare(candidatePassword, this.password)
    return isSame
}

UserSchema.methods.generateToken = function() {
    const generatedToken = jwt.sign({
        userId: this._id, userName: `${this.firstName} ${this.middleName}`, isAdmin: this.isAdmin},
    process.env.JWT_SECRET, {expiresIn: process.env.TOKEN_LIFETIME})
    this.token = generatedToken
    return generatedToken
}

module.exports = mongoose.model('User', UserSchema)