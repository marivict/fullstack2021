const express = require('express')
const morgan =  require('morgan')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :response-time :body'))


let person = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/person', (request, response)=>{
  response.send(person)
})

app.get('/api/person/:id', (request, response) => {
  const id = Number(request.params.id)
  note = person.find(note => note.id === id)

  if(note) {
    response.json(note)
  }else{
    response.statusMessage= "There is not note with that ID" 
    response.status(404).end()
  }
})

const idGenerator = () => {
  let id = Math.floor(Math.random()*10000)
  return id
}


app.post('/api/person', (request, response)=> {
  const body = request.body

  let repeatedName = person.find( name => name.name === body.name)

  if(!body.name){
    return(response.status(400).json({
      error:"name is missing"
    }))
  } else if(!body.number){
    return(response.status(400).json({
      error:"number is missing"
    }))
  } else if(repeatedName){
    return(response.status(404).json({
      error:"name must be unique"
    }))
  }

  const byperson = {
    id:idGenerator(),
    name:body.name,
    number: body.number
  }

  person = person.concat(byperson)
  response.json(byperson)

})


app.get('/info', (request, response) => {
  response.send(`<p>Phone has info  for ${person.length} people </p>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
})
