'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Compra, {foreignKey: "id_usuario"})
      Usuario.hasMany(models.Carrito, {foreignKey: "id_usuario"})
      Usuario.hasMany(models.Comentario, {foreignKey: "id_usuario"})
      Usuario.hasMany(models.Envio, {foreignKey: "id_usuario"})
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tipo: DataTypes.STRING,
    telefono: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};