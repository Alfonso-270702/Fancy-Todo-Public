const jwt = require('jsonwebtoken')
const secretKey = 'aku juga gtw'

function createToken(payload){
    return jwt.sign(payload, secretKey)
}

function verifyToken(token){
    return jwt.verify(token, secretKey)
}

module.exports = {createToken,verifyToken}