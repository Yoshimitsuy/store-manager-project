const connection = require('./connection');

const salesGetAll = async () => {
  const sql = `
  SELECT * FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id;`;
  const [data] = await connection.execute(sql);

  return data;
};

const salesById = async (id) => {
  const sql = `
  SELECT * FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id
  WHERE s.id = ?;`;
  const [data] = await connection.execute(sql, [id]);
  if (!data[0]) return null;

  return data;
};

// const createSale = async () => {
//   const sql = 'INSERT INTO StoreManager.sales (id, date) VALUES (default, default);';
//   const [data] = await connection.execute(sql);

//   return data;
// };

module.exports = {
  salesGetAll,
  salesById,
  // createSale,
};
