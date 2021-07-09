const express = require('express')
const { UserSignIn, UserSignUp } = require('../controllers/users')
const UserRouter = express.Router()

UserRouter.route('/signin', UserSignIn)
UserRouter.route('/signup', UserSignUp)
module.exports = {UserRouter}