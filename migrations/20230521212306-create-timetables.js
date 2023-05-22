'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TimeTable', { 
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
    await queryInterface.dropTable('TimeTable');
  }
};
