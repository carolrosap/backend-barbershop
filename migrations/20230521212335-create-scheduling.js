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
      schedule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schedule', 
          key: 'id'
        }
      }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Scheduling');
  }
};
