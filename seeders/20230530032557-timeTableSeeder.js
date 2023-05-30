const { TimeTable } = require('../models'); 



module.exports = {
  up: async () => {
    await TimeTable.bulkCreate(serviceData);
  },
  down: async () => {
    await TimeTable.destroy({ where: {} });
  }
};
