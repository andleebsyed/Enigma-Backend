const jwt = require('jsonwebtoken')
function verifyToken(req, res, next) {
    try {
        console.log("token verifier accessed")
        const userToken = req.headers.authorization
        console.log("user token ", userToken)
        const secret = process.env.SECRET
        const allowUser = jwt.verify(userToken, secret)
        console.error("user is authorized")
        next()
    }
catch (error) {
    res.status(401).json({status: false, message: "an error occurred", errorDetail: error.message})
    }
}


module.exports = {verifyToken}