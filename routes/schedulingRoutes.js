const express = require('express');
const router = express.Router();
const SchedulingController = require('../controllers/SchedulingController');

// Definir endpoints
router.get('/', SchedulingController.getAllSchedulings);
router.get('/:id', SchedulingController.getSchedulingById);
router.post('/', SchedulingController.createScheduling);
router.put('/:id', SchedulingController.updateScheduling);
router.delete('/:id', SchedulingController.deleteScheduling);

module.exports = router;
