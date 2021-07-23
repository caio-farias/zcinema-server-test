module.exports = (req, res, next) => {
  const { userId } = req
  const { id } = req.params
  if(!userId)
    return res.status(401).send({ message: "Por favor, realize a autenticação."})
  if(id != userId)
    return res.status(401).send({ message: "Sem permissão para realizar esta requisição." })
  next()  
}