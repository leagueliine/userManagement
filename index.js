const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRoutes = require('./config/userRoutes')
const cepRoutes = require('./config/cepRoutes')

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)
app.use('/cep',cepRoutes)

app.listen(21262, () => {
  console.log(`Express started at http://localhost:21262`)
})