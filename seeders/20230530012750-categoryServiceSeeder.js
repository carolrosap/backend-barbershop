const { CategoryService }  = require('../models'); // Verifique o caminho correto para o modelo User

const categoriesServiceData = [
  {
    name: 'barba',
    description: 'descrição do serviço'    
  },
  {
    name: 'corte',
    description: 'descrição do serviço'
  },
  {
    name: 'sobrancelha',
    description: 'descrição do serviço'
  }
];

module.exports = {
  up: async () => {
    await CategoryService.bulkCreate(categoriesServiceData);
  },
  down: async () => {
    await CategoryService.destroy({ where: {} });
  }
};
