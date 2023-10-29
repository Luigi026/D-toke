'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue : 1
        
      },
      order_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Orders'
          }
        },
        onDelete : 'cascade'
      },
      product_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Products'
          }
        },
        onDelete : 'cascade'
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
    await queryInterface.dropTable('Items');
  }
};