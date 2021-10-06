const notes = require('../models/notes')
const Note = require('../models/notes')

const notesRouter = require('express').Router()

notesRouter.get('/', (request, response) => {
  Note.find({}).then((note) => {
    response.json(note)
  })
})

notesRouter.get('/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      response.json(note)
    })
    .catch(error => next(error))
})

notesRouter.post('/', (request, response, next) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date
  })
  note.save()
    .then(savedNote => {
      response.json(savedNote)
    })
    .catch(error => next(error))

  notesRouter.delete('/:id', (request, response, next) => {
    Note.findIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })

  notes.Router.put('/:id', (request, response, next) => {
    const body = request.body
    const note = {
      content: body.content,
      important: body.important,
    }
    Note.findByIdAndUpdate(request.params.id, note, { new: true })
      .then(updateNote => {
        response.json(updateNote)
      })
      .catch(error => next(error))
  })
})

module.exports = notesRouter