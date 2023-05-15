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

const getSellById = async (id) => {
  const sale = await sales.findOne({ where: { id } });
  return sale;
};

const getUserById = async (id) => {
  const user = await users.findOne({ where: { id } });
  return user;
};

module.exports = {
  getAllSellers,
  createSell,
  getUserIdByName,
  getSellById,
  getUserById,
};