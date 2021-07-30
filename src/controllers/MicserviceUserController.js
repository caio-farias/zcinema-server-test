const User = require("../models/User")

module.exports = {
  async getUser(req, res){
    const { email } = req.body
    try {
      const user = await User.findOne({ where: { email: email } })
      if(!user)
        return res.status(400).json({ message: "Usuário inexistente" })
      
      return res.json({ user })
    } catch (error) {
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async getUserWithPassword(req, res){
    const { email } = req.body
    try {
      const user = await User.scope('withPassword').findOne({ where: { email: email } })
      if(!user)
        return res.status(400).json({ message: "Usuário inexistente" })
      
      return res.json({ user })
    } catch (error) {
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  }
}