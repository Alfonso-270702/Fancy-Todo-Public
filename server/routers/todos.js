const route = require('express').Router()
const TodoController = require('../controllers/todo')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.use(authentication)
route.post('/',TodoController.create)
route.get('/',TodoController.list)
route.get('/:id',TodoController.findTodo)
route.put('/:id',authorization,TodoController.editOne)
route.delete('/:id',authorization,TodoController.deleteOne)

module.exports = route