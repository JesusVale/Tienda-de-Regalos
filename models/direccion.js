'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Direccion.hasMany(models.Envio, {foreignKey: "partida"})
      Direccion.hasMany(models.Envio, {foreignKey: "destino"})
    }
  }
  Direccion.init({
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    codigo_postal: DataTypes.INTEGER,
    numero_exterior: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};