const mongoose = require('mongoose')

//mongodb+srv://<username>:<password>@cluster0.litnumi.mongodb.net/
//sanju
//sanjay123

mongoose.connect("mongodb+srv://sanju:sanjay123@cluster0.litnumi.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}