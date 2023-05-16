const { Router } = require('express');
const ordersController = require('../controllers/order.controller');

const routes = Router();

routes.get('/orders/:id', ordersController.getAllOrdersFromUserId);
routes.put('/orders/:id', ordersController.changeOrderStatus);

module.exports = routes;