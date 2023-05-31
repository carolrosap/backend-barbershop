const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');
const serviceController = new ServiceController();

router.get('/', serviceController.getAllServices);


module.exports = router;
