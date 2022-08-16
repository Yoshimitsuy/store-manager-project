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

const addProduct = async (name) => {
  const newProduct = await productsModel.addProduct(name);

  const data = {
    id: newProduct.insertId,
    name,
  };

  return data;
};
  
module.exports = {
  getAll,
  findById,
  addProduct,
};
