const axios = require('axios')
const bcrypt = require('bcryptjs')
const { secret } = require('./auth-jwt.json')
require('dotenv/config')

const baseURL = `http://${process.env.AUTH_HOST}`
const api = axios.create({ baseURL })

api.interceptors.request.use(async config => {
  // const token = await bcrypt.hash(secret, 10)

  const headers = { ...config.headers }

  if (secret) {
    headers.Authorization = secret
  }

  return { ...config, headers }
})

module.exports =  api