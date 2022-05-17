const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    link: String,
    likes: Number
})

postSchema.set('toJSON', {
    transform:(document, returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
})

module.exports = mongoose.model('Post', postSchema)