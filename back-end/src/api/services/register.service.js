const { users } = require('../../database/models');

const registerUser = async (userInfo) => {
  const newUser = await users.create(userInfo);
  return newUser;
};

module.exports = {
  registerUser,
};