const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const routes = Router();

routes.get('/products', productsController.getAllProducts);

module.exports = routes;