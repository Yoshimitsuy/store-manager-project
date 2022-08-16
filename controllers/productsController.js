const productsServices = require('../services/productsServices');

const getAll = async (req, res) => { 
  const products = await productsServices.getAll();

  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const data = await productsServices.findById(id);
  console.log(data);
  if (data.length === 0) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(data[0]);
};

const addProduct = async (req, res) => {
  const { name } = req.body;

  const newProduct = await productsServices.addProduct(name);

  return res.status(201).json(newProduct);
};

module.exports = {
  getAll,
  findById,
  addProduct,
};
