'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'TimeTable',
  });
  return TimeTable;
};