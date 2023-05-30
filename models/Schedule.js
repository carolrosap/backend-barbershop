'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Adicione essa opção para definir 'id' como chave primária
      autoIncrement: true
    },
    time: DataTypes.TIME,
    available: DataTypes.TINYINT,

  }, {
    sequelize,
    modelName: 'Schedule',
    freezeTableName: true,
    timestamps: false
  });
  return Schedule;
};