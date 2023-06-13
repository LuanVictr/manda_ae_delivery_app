const administratorServices = require('../services/administrator.service');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await administratorServices.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
};