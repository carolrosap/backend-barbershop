const Scheduling = require('../models/Scheduling');

exports.getAllSchedulings = async (req, res) => {
  try {
    const schedulings = await Scheduling.findAll();
    res.json(schedulings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSchedulingById = async (req, res) => {
  const { id } = req.params;
  try {
    const scheduling = await Scheduling.findByPk(id);
    if (scheduling) {
      res.json(scheduling);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Definir outras funções de manipulação dos dados do usuário
