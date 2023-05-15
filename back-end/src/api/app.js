const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.route');
const registerRoutes = require('./routes/register.route');
const productsRoutes = require('./routes/products.route');
const sellRoutes = require('./routes/sell.route');
const ordersRoutes = require('./routes/order.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(loginRoutes);
app.use(registerRoutes);
app.use(productsRoutes);
app.use(sellRoutes);
app.use(ordersRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
