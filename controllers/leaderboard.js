const {Leaderboard} = require('../models/leaderboard.model')
async function GetUsersFromLeaderboard(req, res) {
    
    try {
        const leaderBoardData = await Leaderboard.find({})
        res.json({ status: true, message: "leaderboard fetched successfully", data: leaderBoardData })
        
    }
    catch (error) {
        res.json({status: false, message: "Error occured while fetching leaderboard", errMessage: error.message})
    }
    
}


async function SaveUserToLeaderboard(req, res) {
    

    try {
        const {userData} = req.body
       console.log({userData})
       const newUser = new Leaderboard(userData)
       const response = await newUser.save()
       res.json({status: true, message: "user added to leaderboard successfully", response})
    }
   catch (error) {
       res.status(500).json({status: false, message: "Error occured while saving user to Leaderboard", errMessage: error.message  })
    }
}


module.exports = {GetUsersFromLeaderboard, SaveUserToLeaderboard}