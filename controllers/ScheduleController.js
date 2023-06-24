const { Schedule, User } = require('../models');

class ScheduleController {
  // Adicionar métodos e funcionalidades específicas para a classe ClientController
  async getAllSchedules(req, res) {
    try {
      const { userId, available } = req.query
      const include = [];
      const where = [];
      if (userId) {
        include.push({
          model: User,
          as: 'professional',
          where: { id: userId }
        })
      } else {
        include.push({
          model: User,
          as: 'professional'
        })
      }
      if(available) {
        where.push({
          available
        })
      }

      const searchParams = {
        include,
        where,
        order: [
          ['date', 'ASC'],
          ['time', 'ASC']
        ]
      }
      const schedules = await Schedule.findAll(searchParams);
      res.json(schedules);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

module.exports = ScheduleController;
