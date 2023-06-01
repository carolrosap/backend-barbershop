const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');
const serviceController = new ServiceController();

router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);


module.exports = router;
