const { sales } = require('../../database/models');

const getOrdersFromSellerId = async (id) => {
  const orders = await sales.findAll({ where: { sellerId: id } });
  return orders;
};

module.exports = {
  getOrdersFromSellerId,
};