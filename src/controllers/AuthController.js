const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../auth-jwt.json')

module.exports= {
  async authenticate(req, res){
    const { email, password } = req.body
    try {
      const user = await User.scope('withPassword').findOne({ where: { email: email } })
      if(!user)
        return res.status(400).json({ message: "Usuário inválido." })
      
      const isSamePassword = await bcrypt.compare(password, user.password)
      if(!isSamePassword)
        return res.status(400).json({ message: "Senha incorreta, tente novamente." })
      
      delete user['dataValues'].password
      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400,
      })
      return res.json({user, token})
    } catch (error) {
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  }
}
