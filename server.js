const express = require('express');
const server = express();
const cors = require('cors');

const clientRoutes = require('./routes/clientRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const schedulingRoutes = require('./routes/schedulingRoutes');

server.use(cors());
server.use(express.json());
server.use('/client', clientRoutes);
server.use('/professional', professionalRoutes);
server.use('/service', serviceRoutes);
server.use('/schedule', scheduleRoutes);
server.use('/scheduling', schedulingRoutes);

module.exports = server; // Exportar o app, não iniciar o servidor aqui
