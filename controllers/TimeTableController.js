const TimeTable = require('../models/TimeTable');

exports.getAllTimeTables = async (req, res) => {
  try {
    const timetables = await TimeTable.findAll();
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getTimeTableById = async (req, res) => {
  const { id } = req.params;
  try {
    const timetable = await TimeTable.findByPk(id);
    if (timetable) {
      res.json(timetable);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Definir outras funções de manipulação dos dados do usuário
