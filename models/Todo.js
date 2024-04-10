const mongoose = require('mongoose')

const TodoModel = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const modelInstance = mongoose.model('Todo', TodoModel);
module.exports = modelInstance;