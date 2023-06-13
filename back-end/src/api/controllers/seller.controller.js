const sellerServices = require('../services/seller.service');

const getOrdersFromSellerId = async (req, res) => {
  try { 
  const { id } = req.params;
  const orders = await sellerServices.getOrdersFromSellerId(id);
  res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getOrdersFromSellerId,
};
