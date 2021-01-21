const express = require('express');
const express = require('express');
const routes = express.Router()

const UsuarioController = require('./controllers/UsuarioController')
const ProjetoController = require('./controllers/ProjetoController')

routes.get('/usuarios', UsuarioController.index)
routes.post('/usuarios', UsuarioController.create)
routes.put('/usuarios/:id', UsuarioController.update)
routes.delete('/usuarios/:id', UsuarioController.delete)

routes.get("/projetos", )


module.exports = routes;