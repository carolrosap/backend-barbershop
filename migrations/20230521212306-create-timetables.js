'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('grade_horarios', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario', 
          key: 'id'
        }
      },
      horario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'horario', 
          key: 'id'
        }
      }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('grade_horarios');
  }
};
