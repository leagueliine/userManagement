const express = require('express')
const routes = express.Router()



let db = [
  {'1':{Nome: 'Usuario 1', Idade: '23'} },
  {'2':{Nome: 'Usuario 2', Idade: '23'} },
  {'3':{Nome: 'Usuario 3', Idade: '23'} }
]
// Buscar Dados
routes.get('/', (req, res) => {
return res.json(db)
})

// Inserir Dados
routes.post('/add', (req, res) => {
  const body = req.body

  if(!body)
  return res.status(400).end()

  db.push(body)
  return res.json(body)
})
  //deletar dados
routes.delete('/:id',(req,res) =>{
  const id = req.params.id

  let newDB = db.filter(item =>{
    if(!item[id])
      return item
  })
  db = newDB
  return res.send(newDB)
})

module.exports = routes
