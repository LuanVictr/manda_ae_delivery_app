const { sales } = require('../../database/models');

const getAllOrdersFromUserId = async (id) => {
  const orders = await sales.findAll({ Where: { userId: id } });
  return orders;
};

module.exports = {
  getAllOrdersFromUserId,
};