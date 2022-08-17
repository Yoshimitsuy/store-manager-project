const salesServices = require('../services/salesServices');

const salesGetAll = async (_req, res) => {
  try {
    const data = await salesServices.salesGetAll();
    return res.status(200).json(data); 
  } catch (err) {
    return res.status(500).json({ message: 'Error salesGetAll' });
  }
};

const salesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, code, resp } = await salesServices.salesById(id);
    if (message) return res.status(code).json({ message });
    return res.status(code).json(resp);
  } catch (err) {
    return res.status(500).json({ message: 'Error salesById' });
  }
};

module.exports = {
  salesGetAll,
  salesById,
};
