const {QuizCategory} = require('../models/quizCategory.model')
async function QuizData(req, res) {
    try {
        const quizData = await QuizCategory.find({})
        res.json({status: true, message: "data fetched successfully", quizCategories: quizData})
    }
    catch (error) {
        res.status(500).json({status: false, message: "Error occurred while fetching quiz data", errMessage: error.message})
    }
}


module.exports = {QuizData}