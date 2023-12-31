const md5 = require('md5');
const { users } = require('../../database/models');
const { generateToken } = require('../../utils/jsonwebtoken');

const registerUser = async (userInfo) => {
  const userExists = await users.findOne({ where: { email: userInfo.email } });
  if (userExists) {
    throw Object.assign(new Error('Usuário ja registrado'), { status: 500 });
  }
  const newPassword = md5(userInfo.password);
  const newUser = await users.create({
    name: userInfo.userName,
    email: userInfo.email,
    password: newPassword,
    role: 'customer',
  });
  const token = generateToken(newUser.email);
  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  };
};

module.exports = {
  registerUser,
};