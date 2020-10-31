const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo: {
        type : String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    createdAt: {
        type : Number,
        default : () => Date.now()
    },
    is_completed: {
        type : Boolean,
        default : false
    }
})

let todoModel = mongoose.model('todo', todoSchema)

module.exports = todoModel;