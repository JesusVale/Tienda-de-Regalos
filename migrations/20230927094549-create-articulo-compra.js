'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArticuloCompras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_articulo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Articulos",
          key: "id"
        }
      },
      id_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Compras",
          key: "id"
        }
      },
      cantidad: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ArticuloCompras');
  }
};