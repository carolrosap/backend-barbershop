const CategoryService = require('../models/CategoryService');

exports.getAllCategoriesServices = async (req, res) => {
  try {
    const categoryServices = await CategoryService.findAll();
    res.json(categoryServices);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCategoryServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryService.findByPk(id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Definir outras funções de manipulação dos dados do usuário
