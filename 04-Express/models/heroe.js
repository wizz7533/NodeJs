'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Heroe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Heroe.init({
    name: DataTypes.STRING,
    superpower: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Heroe',
  });
  return Heroe;
};