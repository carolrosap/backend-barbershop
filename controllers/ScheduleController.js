const { Schedule, User } = require('../models');

class ScheduleController {
  // Adicionar métodos e funcionalidades específicas para a classe ClientController
  async getAllSchedules(req, res) {
    try {
      const schedules = await Schedule.findAll({
        include: [
          {
            model: User,
            as: 'professional',
          }
        ],
        order: [
          ['date', 'ASC'], 
          ['time', 'ASC']
        ]
      });
      res.json(schedules);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // async createService(req, res) {
  //   try {
  //     const serviceData = req.body;
  //     const newService = await Service.create(serviceData);
  //     res.status(201).json(newService);
  //     //console.log(Service);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }
}

module.exports = ScheduleController;
