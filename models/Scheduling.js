'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scheduling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scheduling.belongsTo(models.Service, {
        foreignKey: 'service_id',
        as: 'service',
      });
      Scheduling.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'professional',
      });
      Scheduling.belongsTo(models.TimeTable, {
        foreignKey: 'timetable_user_id',
        as: 'client',
      });
      Scheduling.belongsTo(models.Schedule, {
        foreignKey: 'timetable_schedule_id',
        as: 'schedule',
      });
    }
  }
  Scheduling.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Adicione essa opção para definir 'id' como chave primária
      autoIncrement: true
    },
    date_scheduling: DataTypes.DATE,
    client_obs: DataTypes.STRING, 
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    timetable_user_id: DataTypes.INTEGER,
    timetable_schedule_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Scheduling',
    freezeTableName: true,
    timestamps: false
  });
  return Scheduling;
};