const express = require('express');
const app = express();
app.use(express.json());

const clientRoutes = require('./routes/clientRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

app.use('/client', clientRoutes);
app.use('/professional', professionalRoutes);
app.use('/service', serviceRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
