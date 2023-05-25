const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/ScheduleController');

// Definir endpoints
router.get('/', ScheduleController.getAllSchedules);
router.get('/:id', ScheduleController.getScheduleById);
router.post('/', ScheduleController.createSchedule);
router.put('/:id', ScheduleController.updateSchedule);
router.delete('/:id', ScheduleController.deleteSchedule);

module.exports = router;
