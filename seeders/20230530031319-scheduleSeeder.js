'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const schedules = [];
    const userId = 3;  // o id do usuário
    const dateStart = new Date();  // data de início
    const daysToAdd = 7;  // número de dias a partir de agora

    // Crie os horários para os próximos 7 dias
    for (let i = 0; i < daysToAdd; i++) {
      const date = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate() + i);
      for (let hour = 9; hour <= 18; hour++) {  // de 9:00 até 18:00
        if (hour != 12) {
          const time = `${hour}:00:00`;

          schedules.push({
            time: time,
            date: date,
            available: 1,  // disponível
            user_id: userId
          });

        }

      }
    }

    return queryInterface.bulkInsert('Schedule', schedules, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schedule', null, {});
  }
};
