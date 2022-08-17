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

const setProduct = async (id, name) => {
  const data = await productsModel.setProduct(id, name);
  // console.error(data);
  if (!data) return { code: 404 };

  const dataOk = { code: 200, id, name };
  return dataOk;
};

const deleteProduct = async (id) => {
  const data = await productsModel.deleteProduct(id);

  return data;
};
  
module.exports = {
  getAll,
  findById,
  addProduct,
  setProduct,
  deleteProduct,
};
