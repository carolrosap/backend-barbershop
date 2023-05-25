const express = require('express');
const router = express.Router();
const TimeTableController = require('../controllers/TimeTableController');

// Definir endpoints
router.get('/', TimeTableController.getAllTimeTables);
router.get('/:id', TimeTableController.getTimeTableById);
router.post('/', TimeTableController.createTimeTable);
router.put('/:id', TimeTableController.updateTimeTable);
router.delete('/:id', TimeTableController.deleteTimeTable);

module.exports = router;
