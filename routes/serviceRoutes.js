const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');

// Definir endpoints
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getServiceById);
router.post('/', ServiceController.createService);
router.put('/:id', ServiceController.updateService);
router.delete('/:id', ServiceController.deleteService);

module.exports = router;
