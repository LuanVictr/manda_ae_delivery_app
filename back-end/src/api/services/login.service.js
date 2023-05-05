const md5 = require('md5');
const { users } = require('../../database/models');

const { generateToken } = require('../../utils/jsonwebtoken');

const login = async ({ email, password }) => {
  const user = await users.findOne({ where: { email } });
  const pw = md5(password);
  if (pw !== user.password) {
    throw Object.assign(new Error('User not registered'), { status: 404 });
  }
  const token = generateToken(email);
  return token;
};

// resolver problema do bcrypt nao estar sendo encontrado

module.exports = {
  login,
};