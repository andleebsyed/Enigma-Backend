const jwt = require('jsonwebtoken')
function verifyToken(req, res, next) {
    try {
        const userToken = req.headers.authorization
        const secret = process.env.SECRET
        const allowUser = jwt.verify(userToken, secret)
        next()
    }
catch (error) {
    res.status(401).json({status: false, message: "an error occurred", errorDetail: error.message})
    }
}


module.exports = {verifyToken}