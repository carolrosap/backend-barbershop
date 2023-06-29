'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      neighborhood: {
        type: Sequelize.STRING(30)
      },
      zip_code: {
        type: Sequelize.STRING(10)
      },
      city: {
        type: Sequelize.STRING(30)
      },
      cpf: {
        type: Sequelize.STRING(15)
      },
      born_date: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      state: {
        type: Sequelize.STRING(2)
      },
      login: {
        type: Sequelize.STRING(255)
      },
      name: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      gender: {
        type: Sequelize.STRING(1)
      },
      telephone: {
        type: Sequelize.STRING(15)
      },
      user_type: {
        type: Sequelize.ENUM,
        values: ['admin', 'client', 'professional'],
      },
      chat_id: {
        type: Sequelize.STRING(255)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};