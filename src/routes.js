const express = require('express');
const express = require('express');

const routes = express.Router()

const UsuarioController = require('./controllers/UsuarioController')

routes.get('/usuarios', UsuarioController.index)

module.exports = routes;