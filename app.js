// start
const express = require('express');
const { getAll, findById,
  addProduct, setProduct, deleteProduct } = require('./controllers/productsController');
  
const { isValid } = require('./middlewares/nameCheck');
const { salesGetAll, salesById } = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAll);

app.get('/products/:id', findById);

app.post('/products', isValid, addProduct);

app.get('/sales', salesGetAll);

app.get('/sales/:id', salesById);

app.put('/products/:id', isValid, setProduct);

app.delete('/products/:id', deleteProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
