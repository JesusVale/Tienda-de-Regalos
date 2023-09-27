'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Envio.belongsTo(models.Articulo, {foreignKey: "idarticulo"})
      Envio.belongsTo(models.Direccion, {foreignKey: "iddireccion"})
      Envio.belongsTo(models.Usuario, {foreignKey: "idusuario"})
    }
  }
  Envio.init({
    id_articulo: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    partida: DataTypes.INTEGER,
    destino: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Envio',
  });
  return Envio;
};