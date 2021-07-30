const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()
const MicroServiceAuthMiddleware = require('./middlewares/MicroserviceAuth')
const MicroserviceUserController = require('./controllers/MicserviceUserController')


routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getAllUsers)
routes.get('/users/:id', UserController.getUser)
routes.patch('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser)

routes.post(
  '/users/with-password', 
  MicroServiceAuthMiddleware, 
  MicroserviceUserController.getUserWithPassword
)


module.exports = routes