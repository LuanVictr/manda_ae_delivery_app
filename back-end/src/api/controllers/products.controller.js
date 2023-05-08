const productsServices = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  try {
  const result = await productsServices.getAllProducts();
  res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
};