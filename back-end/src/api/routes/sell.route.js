const { Router } = require('express');
const sellController = require('../controllers/sell.controller');

const routes = Router();

routes.get('/sellers', sellController.getAllSellers);
routes.post('/sell', sellController.createSell);
routes.get('/user/:name', sellController.getUserIdByName);

module.exports = routes;