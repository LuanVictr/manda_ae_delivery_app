const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.route');
const registerRoutes = require('./routes/register.route');
const productsRoutes = require('./routes/products.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(loginRoutes);
app.use(registerRoutes);
app.use(productsRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
