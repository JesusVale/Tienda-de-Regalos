'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id"
        }
      },
      id_articulo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Articulos",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carritos');
  }
};