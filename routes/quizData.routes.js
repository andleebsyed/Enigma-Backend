const express = require('express')
const { QuizData } = require('../controllers/quizData')
const QuizDataRouter = express.Router()

QuizDataRouter.route('/').get(QuizData)

module.exports = {QuizDataRouter}