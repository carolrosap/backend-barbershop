const { Schedule } = require('../models'); 


module.exports = {
  up: async () => {
    const schedules = [];

    // Gerar horários das 09:00 às 18:00
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute <= 45; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const schedule = {
          time,
          available: 1 // Definir como disponível
        };
        schedules.push(schedule);
      }
    }

    await Schedule.bulkCreate(schedules);
  },
  down: async () => {
    await Schedule.destroy({ where: {} });
  }
};
