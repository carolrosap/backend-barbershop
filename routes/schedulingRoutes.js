const express = require('express');
const router = express.Router();
const SchedulingController = require('../controllers/SchedulingController');
const schedulingController = new SchedulingController();

router.get('/', schedulingController.getAllSchedulings);
// router.get('/:id', schedulingController.getSchedulingById);
router.post('/', schedulingController.createScheduling);


module.exports = router;



