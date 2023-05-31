'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeTable extends Model {
    
    static associate(models) {
      // define association here
      TimeTable.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      TimeTable.belongsTo(models.Schedule, {
        foreignKey: 'schedule_id',
        as: 'schedule',
      });
    }
  }
  TimeTable.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Adicione essa opção para definir 'id' como chave primária
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'TimeTable',
    freezeTableName: true,
    timestamps: false
  });
  return TimeTable;
};