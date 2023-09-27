'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Articulo.hasMany(models.ArticuloCompra, {foreignKey:"id_articulo"})
      Articulo.hasMany(models.Carrito, {foreignKey:"id_articulo"})
      Articulo.hasMany(models.Envio, {foreignKey: "id_articulo"})
    }
  }
  Articulo.init({
    descripcion: DataTypes.TEXT,
    precio: DataTypes.FLOAT,
    imagen: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articulo',
  });
  return Articulo;
};