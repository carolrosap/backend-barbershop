'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'professional',
      });
      Schedule.hasMany(models.Scheduling, {
        foreignKey: 'id',
        as: 'schedule',
      });
    }
  }
  Schedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    time: DataTypes.TIME,
    available: DataTypes.TINYINT,
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Schedule',
    freezeTableName: true,
    timestamps: false
  });
  return Schedule;
};