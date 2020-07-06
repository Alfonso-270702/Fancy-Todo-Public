const route = require('express').Router()
const TodoController = require('../controllers/todo')

route.post('/',TodoController.create)
route.get('/',TodoController.list)
route.get('/:id',TodoController.findTodo)
route.put('/:id',TodoController.editOne)
route.delete('/:id',TodoController.deleteOne)

module.exports = route