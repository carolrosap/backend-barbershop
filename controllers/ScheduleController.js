const { Schedule, User } = require('../models');

class ScheduleController {
  // Adicionar métodos e funcionalidades específicas para a classe ClientController
  async getAllSchedules(req, res) {
    try {
      const { userId, available } = req.query;
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
      if (available) {
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

  async changeStatus(scheduleId) {
    try {
      // Buscar o schedule pelo id
      const schedule = await Schedule.findOne({ where: { id: scheduleId } });

      if (!schedule) {
        throw new Error('Schedule not found');
      }

      // Atualizar o campo 'available' para o seu oposto atual (false se for true e vice-versa)
      await schedule.update({ available: !schedule.available });

      // Retornar o schedule atualizado
      return schedule;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async isScheduleAvailable(scheduleId) {
    try {
      // Buscar o schedule pelo id
      const schedule = await Schedule.findOne({ where: { id: scheduleId } });  
      if (!schedule) {
        throw new Error('Schedule not found');
      }
      // Retornar a disponibilidade do schedule
      return schedule.available;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  

}

module.exports = ScheduleController;
