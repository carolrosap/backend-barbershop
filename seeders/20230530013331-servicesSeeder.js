const { Service } = require('../models'); 

const serviceData = [
  {
    category_id: 1,
    user_id: 3    
  },
  {
    category_id: 2,
    user_id: 3
  },
  {
    category_id: 3,
    user_id: 3
  }
];

module.exports = {
  up: async () => {
    await Service.bulkCreate(serviceData);
  },
  down: async () => {
    await Service.destroy({ where: {} });
  }
};
