const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const generateToken = (userInfo) => {
  const token = jwt.sign(userInfo, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };