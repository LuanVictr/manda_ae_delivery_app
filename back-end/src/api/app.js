const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.route');
const registerRoutes = require('./routes/register.route');
const productsRoutes = require('./routes/products.route');
const sellRoutes = require('./routes/sell.route');
const ordersRoutes = require('./routes/order.route');
const sellerRoutes = require('./routes/seller.route');
const administratorRoutes = require('./routes/administrator.route');

const app = express();
app.use('/images', express.static('public'));

app.use(express.json());
app.use(cors());
app.use(loginRoutes);
app.use(registerRoutes);
app.use(productsRoutes);
app.use(sellRoutes);
app.use(ordersRoutes);
app.use(sellerRoutes);
app.use(administratorRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
