const route = require('express').Router()
const HomeController = require('../controllers/homeController')


route.get('/',function(req,res){
    res.status(200).json({ msg: 'Welcome Home'})
})
route.post('/register',HomeController.register)

route.post('/login',HomeController.login)

route.post('/googlelogin',HomeController.googleLogin)


module.exports = route