const loginServices = require('../services/login.service');

const login = async (req, res) => {
  try {
  const userInfo = req.body;
  const result = await loginServices.login(userInfo);
  res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  login,
};