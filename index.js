const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { DbConnection } = require('./db/dbConnection');
const { UserRouter } = require('./routes/user.routes');
const {LeaderboardRouter} = require('./routes/leaderboard.routes');
const { QuizDataRouter } = require('./routes/quizData.routes');
const { verifyToken } = require('./middlewares/verifyToken');
// const {InsertDataToDatabase} = require('./controllers/quizCategoriesAdd')
const app = express()
const PORT = 9000;
// connecting to mongodb
DbConnection()
//Insertion of initial data
// InsertDataToDatabase()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json({status:true, message:"welcome to the homepage of rest-api for enigma(Quiz app)"})
})
app.use('/quizdata', QuizDataRouter)
app.use('/user', UserRouter)
app.use('/leaderboard',verifyToken, LeaderboardRouter)
app.listen(process.env.PORT || PORT, () => console.log("app is up and running"))