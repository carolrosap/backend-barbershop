'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ativo: {
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      bairro: {
        type: Sequelize.STRING(30)
      },
      cep: {
        type: Sequelize.STRING(10)
      },
      cidade: {
        type: Sequelize.STRING(30)
      },
      cpf: {
        type: Sequelize.STRING(15)
      },
      data_nascimento: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING(45)
      },
      endereco: {
        type: Sequelize.STRING(100)
      },
      estado: {
        type: Sequelize.STRING(2)
      },
      login: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(255)
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING(1)
      },
      telefone: {
        type: Sequelize.STRING(15)
      },
      tipo_usuario: {
        type: Sequelize.ENUM,
        values: ['admin', 'cliente', 'profissional'],
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};