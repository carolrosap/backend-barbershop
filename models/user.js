'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.INTEGER,
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
  });
  return User;
};