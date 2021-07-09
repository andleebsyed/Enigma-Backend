const mongoose = require('mongoose')
const { Schema, model } = mongoose
const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    performance: 
        [{quizName: String, score: Number}]
    ,
    
})

const User = model('User', UserSchema)

module.exports = {User}