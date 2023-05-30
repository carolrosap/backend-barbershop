const express = require('express');
const app = express();

// Definir middlewares globais, como o body-parser, cors, etc.

// Importar as rotas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Usar as rotas
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
