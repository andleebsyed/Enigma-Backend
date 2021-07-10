const express = require('express')

const { SaveUserToLeaderboard, GetUsersFromLeaderboard } = require('../controllers/leaderboard')

const LeaderboardRouter = express.Router()

LeaderboardRouter.route('/').post(SaveUserToLeaderboard).get(GetUsersFromLeaderboard)


module.exports = {LeaderboardRouter}