const { TimeTable } = require('../models'); 

const timeTableData = [
  {
    user_id: 3,
    schedule_id: 1
  },
  {
    user_id: 3,
    schedule_id: 2
  },
  {
    user_id: 3,
    schedule_id: 3
  },
  {
    user_id: 3,
    schedule_id: 4
  },
  {
    user_id: 3,
    schedule_id: 5
  },
  {
    user_id: 3,
    schedule_id: 6
  }
]

module.exports = {
  up: async () => {
    await TimeTable.bulkCreate(timeTableData);
  },
  down: async () => {
    await TimeTable.destroy({ where: {} });
  }
};
