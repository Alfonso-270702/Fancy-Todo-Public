require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const route = require('./routers/index')
const errHandler = require('./middleware/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(route)
app.use(errHandler)

app.listen(port,()=> console.log(`running on port ${port}`))