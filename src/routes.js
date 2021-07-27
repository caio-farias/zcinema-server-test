const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()
const AuthMiddleware = require('./middlewares/Auth')
const MicroServiceAuthMiddleware = require('./middlewares/MicroserviceAuth')
const multer = require('multer')
const multerConfig = require('./config/multer')
const MicroserviceUserController = require('./controllers/MicroserviceUserController')


routes.post('/users', multer(multerConfig).single('file'), UserController.createUser)
routes.get('/users', UserController.getAllUsers)
routes.get('/users/:id', AuthMiddleware, UserController.getUser)
routes.patch('/users/:id', AuthMiddleware, UserController.updateUser)
routes.delete('/users/:id', AuthMiddleware, UserController.deleteUser)

routes.post('/microsservice-users/', MicroServiceAuthMiddleware, MicroserviceUserController.getUser)


module.exports = routes