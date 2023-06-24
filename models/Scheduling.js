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
        as: 'client',
      });
      Scheduling.belongsTo(models.Schedule, {
        foreignKey: 'schedule_id',
        as: 'schedule',
      });
      
    }
  }
  Scheduling.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Scheduling',
    freezeTableName: true,
    timestamps: false
  });
  return Scheduling;
};