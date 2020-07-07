const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')

class HomeController{

    static register(req,res,next){
        const { name,email,password } = req.body
        User.create({ name,email,password })
        .then(data=>{
            res.status(201).json({msg: `${data.name} successfully register`}) 
        })
        .catch(err=>{
            next(err)
        })
    }

    static login(req,res,next){
        const { email, password } = req.body
        User.findOne({
            where:{
                email
            }
        })
        .then(data=>{
            if(!data){
                throw {msg: 'No user found',status: 400}
            }
            else{
                const hashedPassword = compare(password,data.password)
                if(hashedPassword){
                    const token = jwt.createToken({id: data.id,email: data.email})
                    res.status(200).json({msg: `${data.name} successfully login`,token})
                }
                else{
                    throw {msg: 'email or password are wrong',status: 400}
                }
            }
        })
        .catch(err=>{
            next(err)
        })
    }

}

module.exports = HomeController