'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Adicione essa opção para definir 'id' como chave primária
      autoIncrement: true
    },
    active: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    born_date: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    user_type: DataTypes.ENUM(['admin','client', 'professional' ])

  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    timestamps: false
  });
  return User;
};