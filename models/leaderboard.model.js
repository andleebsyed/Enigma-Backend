const mongoose = require('mongoose')
const { Schema, model } = mongoose

const LeaderboardSchema = Schema({
    name: {
        type: String,
        required: true
    },
    quizName: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    }
})

const Leaderboard = model('LeaderboardEntry', LeaderboardSchema)

module.exports = { Leaderboard }