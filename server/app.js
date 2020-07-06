const express = require('express')
const app = express()
const port = 3000
const route = require('./routers/index')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(route)

app.listen(port,()=> console.log(`running on port ${port}`))