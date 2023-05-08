const { products } = require('../../database/models');

const getAllProducts = async () => {
  const result = await products.findAll();
  return result;
};

module.exports = {
  getAllProducts,
};