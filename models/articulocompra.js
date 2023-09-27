'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticuloCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticuloCompra.belongsTo(models.Articulo, {
        foreignKey: "idarticulo"
      })

      ArticuloCompra.belongsTo(models.Compra, {
        foreignKey: "idcompra"
      })
    }
  }
  ArticuloCompra.init({
    id_articulo: DataTypes.INTEGER,
    id_compra: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticuloCompra',
  });
  return ArticuloCompra;
};