'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Usuario, {foreignKey:"idusuario"})
    }
  }
  Comentario.init({
    id_usuario: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};