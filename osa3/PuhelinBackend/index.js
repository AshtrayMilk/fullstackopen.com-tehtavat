const express = require("express")
const app = express()
const PORT = 3001

app.use(express.json())

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


app.get('/api/persons', (request, response) => {
    response.json(persons)
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