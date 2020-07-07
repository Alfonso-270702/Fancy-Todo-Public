const route = require('express').Router()
const todoRoute = require('./todos')
const homeRoute = require('./home')
const calenderRoute = require('./calenderHol')

const authentication = require('../middleware/authentication')

route.use('/',homeRoute)

route.use('/todos',todoRoute)

route.use('/calender-holiday',authentication,calenderRoute)

module.exports = route