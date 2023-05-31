const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const clientController = new ClientController();

router.get('/', clientController.getAllClients);
router.post('/', clientController.createClient); 


module.exports = router;
