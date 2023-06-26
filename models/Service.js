'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      // define association here
      Service.belongsTo(models.CategoryService, {
        foreignKey: 'category_id',
        as: 'category',
      });
      Service.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'professional',
      });
      Service.hasMany(models.Scheduling, {
        foreignKey: 'id',
        as: 'scheduling',
      });
    }
  }
  Service.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Adicione essa opção para definir 'id' como chave primária
      autoIncrement: true
    },
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
    freezeTableName: true,
    timestamps: false
  });
  return Service;
};