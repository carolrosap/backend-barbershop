const { Service, User, CategoryService } = require('../models');

class ServiceController {
  // Adicionar métodos e funcionalidades específicas para a classe ClientController
  async getAllServices(req, res) {
    try {
      const services = await Service.findAll({
        include: [
          {
            model: CategoryService,
            as: 'category',
          },
          {
            model: User,
            as: 'user',
          }
        ]
      });
      res.json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ServiceController;
