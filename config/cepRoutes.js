const express = require('express')
const routes = express.Router()

let db = [
    {id:'1', rua:'Fernando Becker', numero:'104'},
    {id:'2', rua:'Joaquim Barbosa', numero:'650'},
    {id:'3', rua:'Olibio de Souza', numero:'213'}
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
   
     //atualizar dados
   routes.put('/:id', (req, res) =>{
     let id = req.params.id;
     let objeto = req.body;
     
     let usuario = db.find(function(item){
      return item.id == id
    })
   
     usuario.rua = objeto.rua
     usuario.numero = objeto.numero
   
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
   
   module.exports = routes
