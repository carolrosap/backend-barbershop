'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('agendamento', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_agendamento: {
        type: Sequelize.DATE
      },
      obs_cliente: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario', 
          key: 'id'
        }
      },
      servico_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'servico', 
          key: 'id'
        }
      },
      grade_horarios_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'grade_horarios', 
          key: 'usuario_id'
        }
      },
      grade_horarios_horario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'grade_horarios', 
          key: 'horario_id'
        }
      }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamento');
  }
};
