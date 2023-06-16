'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.TIME
      },
      date: {
        type: Sequelize.DATEONLY
      },
      available: {
        type: Sequelize.TINYINT
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User', 
          key: 'id' 
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedule');
  }
};
