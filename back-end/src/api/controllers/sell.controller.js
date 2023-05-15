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

const getSellById = async (req, res) => {
  try {
    const { id } = req.params;
    const sell = await sellServices.getSellById(id);
    res.status(200).json(sell);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('entrou');
    const user = await sellServices.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllSellers,
  createSell,
  getUserIdByName,
  getSellById,
  getUserById,
};