const orderServices = require('../services/order.service');

const getAllOrdersFromUserId = async (req, res) => {
  try {
  const { id } = req.params;
  const orders = await orderServices.getAllOrdersFromUserId(id);
  res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await orderServices.changeOrderStatus(id, status);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllOrdersFromUserId,
  changeOrderStatus,
};