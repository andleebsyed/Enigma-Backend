const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { DbConnection } = require('./db/dbConnection');
const { UserRouter } = require('./routes/user.routes');
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
    res.json({status:true, message:"welcome to the homeage of my rest api"})
})

app.use('/user',UserRouter )
app.listen(process.env.PORT || PORT, () => console.log("app is up and running"))