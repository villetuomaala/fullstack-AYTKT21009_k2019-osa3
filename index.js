const express = require('express')
const app = express()

const data = [
  {
    id: 1,
    name: "Ville Tuomaala",
    number: "9",
    display: true
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
    display: true
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
    display: true
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "12-43-768875",
    display: true
  }
]

app.get('/api/persons', (request, response) => {
  response.json(data)
})

app.get('/api/info', (request, response) => {
  console.log(request)
  response.send(`<p>This phonebook has ${data.length} persons.</p><p>${new Date()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})