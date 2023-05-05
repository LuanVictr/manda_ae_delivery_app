const registerServices = require('../services/register.service');

const registerUser = async (req, res) => {
  try {
  const userInfo = req.body;
  const result = await registerServices.registerUser(userInfo);
  res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
};