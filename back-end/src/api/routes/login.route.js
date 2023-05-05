const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const routes = Router();

routes.post('/login', loginController.login);

module.exports = routes;