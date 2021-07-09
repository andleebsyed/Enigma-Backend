const express = require('express');
require('dotenv').config()
const { DbConnection } = require('./dbConnection');
const { UserRouter } = require('./routes/user.routes');
const app = express()
const PORT = 9000;
// connecting to mongodb
DbConnection()
app.get('/', (req, res) => {
    res.json({status:true, message:"welcome to the homeage of my rest api"})
})

app.get('/user',UserRouter )
app.listen(process.env.PORT || PORT, () => console.log("app is up and running"))