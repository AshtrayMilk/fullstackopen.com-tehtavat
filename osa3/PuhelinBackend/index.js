const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const database = require("./services/mongoose")
const app = express()
const PORT = 3001

morgan.token('requestParams', req => JSON.stringify(req.body));
const morganFormat = ':method :url :status :res[content-length] - :response-time ms :requestParams';



app.use(express.json())
app.use(morgan(morganFormat))
app.use(cors())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5234234"
  },
  {
    id: 3,
    name: "Dan abramov",
    number: "12-43-234545"
  },
  {
    id: 4,
    name: "Something being",
    number: "39-23-5732783"
  }

]
const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}
const isNameAlreadyOnPersons = (newName) => {
  let nameExist = persons.some(person => person.name.toLowerCase() == newName.toLowerCase())
  //console.log(nameExist)
  //console.log(persons.map(person => person.name.toLowerCase()+" : "+newName.toLowerCase()))
  return nameExist
}


app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
      response.json(person)
  }else{
      response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  //console.log(body)
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: "Name or phone number is missing"
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  if(isNameAlreadyOnPersons(body.name.toLowerCase())){
    return response.status(400).json({
      error: "Name already exists on contacts"
    })
  }else{
    persons = persons.concat(person)

    response.json(person)
  }
  
})



app.get("/info", (request, response) => {
    response.send(
        `
        Phonebook has info for ${persons.length}\n
        ${Date.now().getDate()}
        `
    )
})
app.get('/', (request, response) => {
    response.send('<h!>Hello this application</h!>')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})




/*

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)
  response.json(note)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
*/
