const express = require('express');
const server = express();

const clientRoutes = require('./routes/clientRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

server.use(express.json());
server.use('/client', clientRoutes);
server.use('/professional', professionalRoutes);
server.use('/service', serviceRoutes);

module.exports = server; // Exportar o app, não iniciar o servidor aqui
