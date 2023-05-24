'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.CategoryService, {
        foreignKey: 'category_id',
        as: 'category',
      });
      Service.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
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