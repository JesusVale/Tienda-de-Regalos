'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Envios', {
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
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      partida: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Direccions",
          key: "id"
        }
      },
      destino: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Direccions",
          key: "id"
        }
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Usuarios",
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
    await queryInterface.dropTable('Envios');
  }
};