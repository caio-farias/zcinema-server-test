const jwt = require('jsonwebtoken')
const { secret } = require('../auth-jwt.json')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader)
    return res.status(401).send({ message: "Token não informado."})
  
  const parts = authHeader.split(' ')

  if(!parts.length == 2)
    return res.status(401).send({ message: "Token incompleto." })

  const [ scheme, token ] = parts

  if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token mal formatado."})
  
  jwt.verify(token, secret, (err, decoded) => {
    if(err)
      return res.status(401).send({ message: "Token inválido"})

    req.userId = decoded.id
    next()
  })
}