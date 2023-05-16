const { sales } = require('../../database/models');

const getAllOrdersFromUserId = async (id) => {
  const orders = await sales.findAll({ where: { userId: id } });
  return orders;
};

const changeOrderStatus = async (id, status) => {
  await sales.update({ status }, { where: { id } });
  return 'updated';
};

module.exports = {
  getAllOrdersFromUserId,
  changeOrderStatus,
};