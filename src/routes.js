const express = require('express');
const express = require('express');
const routes = express.Router()

const UsuarioController = require('./controllers/UsuarioController')

routes.get('/usuarios', UsuarioController.index)
routes.post('/usuarios', UsuarioController.create)
routes.put('/usuarios/:id', UsuarioController.update)
routes.delete('/usuarios/:id', UsuarioController.delete)


module.exports = routes;