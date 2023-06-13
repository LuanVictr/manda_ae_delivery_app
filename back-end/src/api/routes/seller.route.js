const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');

const routes = Router();

routes.get('/seller/orders/:id', sellerController.getOrdersFromSellerId);

module.exports = routes;