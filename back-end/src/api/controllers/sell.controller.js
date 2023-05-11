const sellServices = require('../services/sell.service');

const getAllSellers = async (_req, res) => {
  try {
  const result = await sellServices.getAllSellers();
  res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createSell = async (req, res) => {
  try {
    const sellInfo = req.body;
    const newSell = await sellServices.createSell(sellInfo);
    res.status(201).json(newSell);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserIdByName = async (req, res) => {
  try {
    const { name } = req.params;
    const userId = await sellServices.getUserIdByName(name);
    res.status(200).json({ userId });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllSellers,
  createSell,
  getUserIdByName,
};