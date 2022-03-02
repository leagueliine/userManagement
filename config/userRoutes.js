const express = require('express')
const routes = express.Router()

let db = [
  { id: '1', Nome: 'Usuario 1', Idade: '22', Cursos: [] },
  { id: '2', Nome: 'Usuario 2', Idade: '23', Cursos: [] },
  { id: '3', Nome: 'Usuario 3', Idade: '25', Cursos: [] }
]

// Buscar Dados
routes.get('/', (req, res) => {
  return res.json(db)
})

// Inserir Dados
routes.post('/add', (req, res) => {
  const body = req.body

  if (!body)
    return res.status(400).end()

  db.push(body)
  return res.json(body)
})

//Inserir Dados no Cursos
routes.put('/add-cursos/:id', (req, res) => {
  const id = req.params.id
  const nomeCurso = req.body.nome

  const usuario = db.find(function (item) {
    return item.id == id
  })

  usuario.Cursos.push(nomeCurso)
  return res.json(usuario)
})

//atualizar dados
routes.put('/:id', (req, res) => {
  let id = req.params.id;
  let objeto = req.body;

  let usuario = db.find(function (item) {
    return item.id == id
  })

  usuario.Nome = objeto.nome
  usuario.Idade = objeto.idade

  return res.json(db)

})

//deletar dados
routes.delete('/:id', (req, res) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (item.id != id)
      return item
  })

  db = newDB
  return res.send(newDB)
})

//Deletar dados de Cursos
routes.delete('/del-cursos/:id', (req, res) => {
  const id = req.params.id
  const body = req.body.nome

  //usuario
  let usuario = db.find(item => {
    return item.id == id
  })
  let valorCurso = usuario.Cursos.filter(item =>{
      if(item != body)
      return item
  })
  usuario.Cursos = valorCurso
  return res.send(db)
})

//Excluir todos os dados de Cursos
routes.delete('/del-all-cursos/:id', (req, res) =>{
  const id = req.params.id
  const body = req.body

  let usuario = db.find(item =>{
    return item.id == id
  })

    usuario.Cursos = []
    return res.send(db)
})
module.exports = routes
