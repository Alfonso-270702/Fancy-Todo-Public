const { Todo } = require('../models')

class TodoController{

    static create(req,res,next){
        const {title,description,status,due_date,imageURL} = req.body
        let userId = req.userData.id
        Todo.create({title,description,status,due_date,userId,imageURL})
        .then(data=>{
            res.status(201).json({data})
        })
        .catch(err=>{
            next(err)
        })
    }

    static list(req,res,next){
        let userId = req.userData.id
        Todo.findAll({
            where:{
                userId
            }
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            next(err)
        })
    }

    static findTodo(req,res,next){
        const id = req.params.id
        Todo.findOne({
            where:{
                id: id
            }
        })
        .then(data=>{
            if(!data){
                throw {msg: 'todos not found',status: 400}
            }
            else{
                res.status(200).json({data})
            }
        })
        .catch(err=>{
            next(err)
        })
    }

    static editOne(req,res,next){
        const {title,description,status,due_date,imageURL} = req.body
        Todo.update({title,description,status,due_date,imageURL},{
            where:{
                id: req.params.id
            }
        })
        .then(data=>{
            if(!data){
                throw {msg: 'ERROR! Not Found',status: 404}
            }
            else{
                res.status(200).json({msg:'successfully edit todo'})
            }
        })
        .catch(err=>{
            next(err)
        })
    }
    static deleteOne(req,res,next){
        const id = req.params.id
        Todo.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(data=>{
            if(!data){
                throw {msg: 'ERROR! Not Found',status: 404}
            }
            else{
                res.status(200).json({msg:'successfully delete todo'})
            }
        })
        .catch(err=>{
            next(err)
        })
    }
}


module.exports = TodoController