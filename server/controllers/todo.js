const { Todo } = require('../models')

class TodoController{
    static create(req,res){
        const {title,description,status,due_date} = req.body
        if(!title || !description || !status || !due_date){
            res.status(400).json({error:`title or description or status or due_date must be filled`})
        }
        else{
            Todo.create({title,description,status,due_date})
            .then(data=>{
                res.status(201).json({data})
            })
            .catch(err=>{
                res.status(500).json({error: 'internal server error'})
            })
        }
    }
    static list(req,res){
        Todo.findAll()
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            res.status(500).json({error: 'internal server error'})
        })
    }
    static findTodo(req,res){
        const id = req.params.id
        Todo.findOne({
            where:{
                id: id
            }
        })
        .then(data=>{
            if(!data){
                res.status(400).json({error: 'todos not found'})
            }
            else{
                res.status(200).json({data})
            }
        })
        .catch(err=>{
            res.status(500).json({error: 'internal server error'})
        })
    }
    static editOne(req,res){
        const {title,description,status,due_date} = req.body
        if(!title || !description || !status || !due_date){
            res.status(400).json({error:`title or description or status or due_date must be filled`})
        }
        else{
            Todo.update({title,description,status,due_date},{
                where:{
                    id: req.params.id
                }
            })
            .then(data=>{
                if(!data){
                    res.status(404).json({error: 'ERROR! Not Found'})
                }
                else{
                    res.status(200).json({data})
                }
            })
            .catch(err=>{
                res.status(500).json({error: 'internal server error'})
            })
        }
    }
    static deleteOne(req,res){
        const id = req.params.id
        Todo.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(data=>{
            if(!data){
                res.status(404).json({error: 'ERROR! Not Found'})
            }
            else{
                res.status(200).json({data})
            }
        })
        .catch(err=>{
            res.status(500).json({error: 'internal server error'})
        })
    }
}


module.exports = TodoController