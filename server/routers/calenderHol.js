const route = require('express').Router()
const CalenderController = require('../controllers/calenderController')

route.get('/:country/:year',CalenderController.showAll)

module.exports = route