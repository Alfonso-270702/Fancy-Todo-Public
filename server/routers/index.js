const route = require('express').Router()
const todoRoute = require('./todos')
const homeRoute = require('./home')

route.use('/',homeRoute)

route.use('/todos',todoRoute)


module.exports = route