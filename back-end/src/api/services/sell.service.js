const { users } = require('../../database/models');
const { sales } = require('../../database/models');

const getAllSellers = async () => {
  const result = await users.findAll({ where: { role: 'seller' } });
  return result;
};

const createSell = async (sellInfo) => {
  const newSell = await sales.create(sellInfo);
  return newSell;
};

const getUserIdByName = async (userName) => {
  const user = await users.findOne({ where: { name: userName } });
  return user.id;
};

module.exports = {
  getAllSellers,
  createSell,
  getUserIdByName,
};