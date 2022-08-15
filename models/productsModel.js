const connection = require('./connection');

const getAll = async () => {
  const sql = 'SELECT * FROM StoreManager.products;';
  const [data] = await connection.execute(sql);

  return data;
};

const findById = async (id) => {
  const sql = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [data] = await connection.execute(sql, [id]);

  return data;
};

module.exports = {
  getAll,
  findById,
};
