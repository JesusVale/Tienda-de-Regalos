'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.hasMany(models.ArticuloCompra, {foreignKey:"id_compra"})
      Compra.belongsTo(models.Usuario, {foreignKey:"idusuario"})
    }
  }
  Compra.init({
    id_usuario: DataTypes.INTEGER,
    metodo_pago: DataTypes.STRING,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};