// start
const express = require('express');
const { getAll, findById, addProduct } = require('./controllers/productsController');
const { isValid } = require('./middlewares/nameCheck');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAll);

app.get('/products/:id', findById);

app.post('/products', isValid, addProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
