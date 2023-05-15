const { Router } = require('express');
const sellController = require('../controllers/sell.controller');

const routes = Router();

routes.get('/sellers', sellController.getAllSellers);
routes.post('/sell', sellController.createSell);
routes.get('/user/:name', sellController.getUserIdByName);
routes.get('/sell/:id', sellController.getSellById);
routes.get('/users/:id', sellController.getUserById);

module.exports = routes;