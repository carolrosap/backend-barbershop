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
      avaiable: {
        type: Sequelize.TINYINT
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedule');
  }
};