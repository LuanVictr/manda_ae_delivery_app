const { users } = require('../../database/models');

const getAllUsers = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

module.exports = {
  getAllUsers,
};