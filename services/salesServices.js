const salesModel = require('../models/salesModel');

const format = (data) => {
  let result = [];
  
  data.forEach((i) => {
    result = [...result, {
      saleId: i.sale_id,
      date: i.date,
      productId: i.product_id,
      quantity: i.quantity,
    }];
  });
  return result;
};

const salesGetAll = async () => {
  const data = await salesModel.salesGetAll();
  const formatedData = format(data);
  return formatedData;
};

const salesById = async (id) => {
  const data = await salesModel.salesById(id);
  
  if (!data) return { code: 404, message: 'Sale not found' };

  const formatedData = format(data)
    .map(({ date, productId, quantity }) => ({ date, productId, quantity })); // como melhorar esse map ?
  return { code: 200, resp: formatedData };
};

module.exports = {
  salesGetAll,
  salesById,
};
