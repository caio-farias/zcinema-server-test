const express = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const routes = express.Router()
const AuthMiddleware = require('./middlewares/Auth')
const UserMiddleware = require('./middlewares/User')
const multer = require('multer')
const multerConfig = require('./config/multer')


routes.post('/users', multer(multerConfig).single('file'), UserController.createUser)
routes.get('/users', AuthMiddleware, UserController.getAllUsers)
routes.get('/users/:id', [AuthMiddleware, UserMiddleware], UserController.getUser)
routes.patch('/users/:id', [AuthMiddleware, UserMiddleware], UserController.updateUser)
routes.delete('/users/:id', [AuthMiddleware, UserMiddleware], UserController.deleteUser)

routes.post('/auth', AuthController.authenticate)

module.exports = routes