const { Router } = require('express');
const administratorController = require('../controllers/administrator.controller');

const routes = Router();

routes.get('/users', administratorController.getAllUsers);

module.exports = routes;