/* eslint-disable no-undef */
const mongoose = require('mongoose')
if(process.env.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://user_admin:${password}@notes.epon4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema =  new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Mongoose makes the use of mongo easy',
  date: new Date(),
  important: true,
})

note.save().then( () => {
  console.log('note saved')
  mongoose.connection.close()
})

Note.find({}).then(result => {
  result.forEach( note => {
    console.log(note)
  })
  mongoose.connection.close()
})