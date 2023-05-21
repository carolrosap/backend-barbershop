'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('horario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.TIME
      },
      disponivel: {
        type: Sequelize.TINYINT
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('horario');
  }
};
