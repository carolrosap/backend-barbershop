const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/ScheduleController');
const scheduleController = new ScheduleController();

router.get('/', scheduleController.getAllSchedules);
//router.post('/', serviceController.createService);


module.exports = router;
