const express = require('express')
const app = express()
const PORT = 9000;
app.get('/', (req, res) => {
    res.json({status:true, message:"welcome to the homeage of my rest api"})
})


app.listen(process.env.PORT || PORT, () => console.log("app is up and running"))