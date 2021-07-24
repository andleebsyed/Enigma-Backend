const mongoose = require('mongoose')
async function DbConnection() {
  try {
    await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    console.log("connected to database")
  }
  catch (error) {
    console.log("error occured while connecting to database: ", error?.message, error)
  }
}
module.exports = {DbConnection}