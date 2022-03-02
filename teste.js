let db = [
    { id: '1', Nome: 'Usuario 1', Idade: '22', Cursos: 'NODEJS' },
    { id: '2', Nome: 'Usuario 2', Idade: '23', Cursos: [] },
    { id: '3', Nome: 'Usuario 3', Idade: '25', Cursos: [] }
]
var usuario = db.find((i) =>{
    return i.id == 1
})

console.log(usuario)

let funcao = db.filter = (i) =>{
    return usuario.Cursos != 'NODEJS'
}

db[0].Cursos.pop('NODEJS')
    console.log(funcao())