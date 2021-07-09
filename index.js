const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({status:true, message:"welcome to the homeage of my rest api"})
})


app.listen(9000, () => console.log("app is up and running"))