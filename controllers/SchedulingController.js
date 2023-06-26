const { Service, User, CategoryService, Scheduling, Schedule } = require('../models');
const ScheduleController = require('../controllers/ScheduleController');
const scheduleController = new ScheduleController();

class ServiceController {
  // Adicionar métodos e funcionalidades específicas para a classe ClientController
  async getAllSchedulings(req, res) {
    try {
      const schedulings = await Scheduling.findAll({
        include: [
          {
            model: User,
            as: 'client',
          },
          {
            model: Service,
            as: 'service',
            include: [
              {
                model: CategoryService,
                as: 'category'
              },
              {
                model: User,
                as: 'professional'
              }
            ],
          },
          {
            model: Schedule,
            as: 'schedule',
          }
        ]
      });
      res.json(schedulings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createScheduling(req, res) {
    try {
      const schedulingData = req.body;
      const idSchedule = schedulingData.schedule_id;
      const available = await scheduleController.isScheduleAvailable(idSchedule);
      if (available) {
        const newScheduling = await Scheduling.create(schedulingData);
        await scheduleController.changeStatus(idSchedule);
        res.status(201).json(newScheduling);
      } else {
        console.log("Schedule não está disponível");
        res.status(500).json({ error: 'Schedule is not available' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }




}

module.exports = ServiceController;
