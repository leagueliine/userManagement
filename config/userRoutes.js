const express = require('express')
const routes = express.Router()

let db = [
  {id:'1', Nome: 'Usuario 1', Idade: '22', Cursos:['']},
  {id:'2', Nome: 'Usuario 2', Idade: '23', Cursos:['']},
  {id:'3', Nome: 'Usuario 3', Idade: '25', Cursos:['']}
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

//Inserir Dados no Cursos
routes.post('/:id', (req,res) => {
  
  let id = req.params.id;
  let objeto = req.body;
  
 let usuario = db.find(function(item){
   return item.id == id
 })

   usuario.Cursos = objeto.Cursos

  return res.json(db)
})

  //atualizar dados
routes.put('/:id', (req, res) =>{
  let id = req.params.id;
  let objeto = req.body;
  
 let usuario = db.find(function(item){
   return item.id == id
 })

   usuario.Nome = objeto.nome
   usuario.Idade = objeto.idade

  return res.json(db)

})

  //deletar dados
routes.delete('/:id',(req,res) =>{
  const id = req.params.id

  let newDB = db.filter(item =>{
    if(item.id != req.params.id)
     return item
  })
  db = newDB
  return res.send(newDB)
})

//Deletar dados de Cursos
routes.delete('/:id',(req,res) =>{
  const body = req.body

  let newDB = db.filter(item =>{
    if(item.Cursos != body)
     return item
  })
  db = newDB
  return res.send(newDB)
})


module.exports = routes
