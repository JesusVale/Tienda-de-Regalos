'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrito.belongsTo(models.Usuario, {foreignKey:"idusuario"})
      Carrito.belongsTo(models.Articulo, {foreignKey: "idarticulo"})
    }
  }
  Carrito.init({
    id_usuario: DataTypes.INTEGER,
    id_articulo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};