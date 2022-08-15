const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();

  return products;
};

const findById = async (id) => {
  const data = await productsModel.findById(id);
  if (!data) return null;
  return data;
};
  
module.exports = {
  getAll,
  findById,
};
