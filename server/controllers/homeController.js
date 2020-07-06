const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')

class HomeController{

    static register(req,res){
        const { name,email,password } = req.body
        if(!name || !email || !password ){
            res.status(400).json({error:`name or email or password  must be filled`})
        }
        else{
            User.create({ name,email,password })
            .then(data=>{
                if(data.email){
                    res.status(400).json({err:'email already exist'})
                }
                else{
                    res.status(201).json({msg: `${data.name} successfully register`})
                }
            })
            .catch(err=>{
                res.status(500).json({error: 'internal server error'})
            })
        }
    }

    static login(req,res){
        const { email, password } = req.body
        if(!email || !password){
            res.status(400).json({err:'email or password are wrong'})
        }
        else{
            User.findOne({
                where:{
                    email
                }
            })
            .then(data=>{
                if(!data){
                    res.status(400).json({err:'No user found'})
                }
                else{
                    const hashedPassword = compare(password,data.password)
                    if(hashedPassword){
                        const token = jwt.createToken({email: data.email})
                        res.status(200).json({msg: `${data.name} successfully login`,token})
                    }
                    else{
                        res.status(400).json({err:'email or password are wrong'})
                    }
                }
            })
            .catch(err=>{
                res.status(500).json({err:'internal server error'})
            })
        }
    }

}

module.exports = HomeController