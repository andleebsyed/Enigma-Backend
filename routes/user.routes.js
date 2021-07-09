const express = require('express')
const { UserSignIn, UserSignUp } = require('../controllers/users')
const UserRouter = express.Router()

UserRouter.route('/signin').post(UserSignIn)
UserRouter.route('/signup').post(UserSignUp)
module.exports = {UserRouter}