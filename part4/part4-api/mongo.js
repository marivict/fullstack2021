const mongoose = require('mongoose')

if(process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =`mongodb+srv://post:${password}@cluster0.iug7j.mongodb.net/article?retryWrites=true&w=majority`
mongoose.connect(url)

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    link: String,
    likes: Number
})

const Post = mongoose.model('Post', postSchema)

// const post = new Post({
//     title: 'First Article',
//     author: 'Maria De La Rosa',
//     link: 'http://gbh.com.do',
//     likes: 5
// })

Post.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

// post.save().then(result => {
//     console.log('post saved!')
//     mongoose.connection.close()
// })