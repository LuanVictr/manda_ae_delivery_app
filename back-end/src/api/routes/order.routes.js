const { Router } = require('express');
const ordersController = require('../controllers/order.controller');

const routes = Router();

routes.get('/orders/:id', ordersController.getAllOrdersFromUserId);

module.exports = routes;