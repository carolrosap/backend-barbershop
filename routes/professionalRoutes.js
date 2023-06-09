const express = require('express');
const router = express.Router();
const ProfessionalController = require('../controllers/ProfessionalController');
const professionalController = new ProfessionalController();

router.get('/', professionalController.getAllProfessionals);
router.post('/', professionalController.createProfessional);

module.exports = router;
