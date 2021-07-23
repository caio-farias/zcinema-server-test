const express = require('express')
const routes = require('./routes')
const corsMiddleware = require('./cors')
require('./db/index')

const app = express()
app.use(corsMiddleware)
app.options('*', corsMiddleware)

app.use((req, res, next) =>{
  console.log(`>> ${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
})

app.use(express.json())
app.use(routes)

app.listen(8000)
