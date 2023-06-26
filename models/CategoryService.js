'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryService extends Model {
    static associate(models) {
      // define association here
    }
  }
  CategoryService.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoryService',
    freezeTableName: true,
    timestamps: false
  });
  return CategoryService;
};