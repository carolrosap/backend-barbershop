'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Scheduling', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date_scheduling: {
        type: Sequelize.DATE
      },
      client_obs: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User', 
          key: 'id'
        }
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Service', 
          key: 'id'
        }
      },
      timetable_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TimeTable', 
          key: 'user_id'
        }
      },
      timetable_schedule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TimeTable', 
          key: 'schedule_id'
        }
      }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Scheduling');
  }
};
