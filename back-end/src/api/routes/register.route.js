const { Router } = require('express');
const registerController = require('../controllers/register.controller');

const routes = Router();

routes.post('/register', registerController.registerUser);

module.exports = routes;