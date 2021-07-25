const mongoose = require('mongoose')
const {Schema, model} = mongoose
const QuizCategorySchema = Schema({
    quizName: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    questions: [{
        question : {
            type: String,
            required: true
        },
        options: [{type: String, required: true} ],
        correctOption: {
            type: String,
            required: true
        }
    }
    ]
})

const QuizCategory = model('QuizCategory', QuizCategorySchema)
module.exports = {QuizCategory}