const Schedule = require('../models/Schedule');

exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findByPk(id);
    if (schedule) {
      res.json(schedule);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Definir outras funções de manipulação dos dados do usuário
