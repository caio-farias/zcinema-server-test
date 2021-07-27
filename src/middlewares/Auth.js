const api = require('../axios')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const { id } = req.params
  
  if(!authHeader)
    return res.status(401).send({ message: "Token não informado."})
  
  const parts = authHeader.split(' ')

  if(!parts.length == 2)
    return res.status(401).send({ message: "Token incompleto." })

  const [ scheme, token ] = parts

  if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token mal formatado."})

  try {
    const result = await api.post('/permission', { id, token })
    const { permission } = result.data

    if(permission == 'DENIED'){
      return res.status(401).json({ message: "Sem permissão para realizar esta requisição." })
    }
    next()
  } catch (error) {
    const { message } = error.response.data
    return res.status(400).json({ message })
  }
}