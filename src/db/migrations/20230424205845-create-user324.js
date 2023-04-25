'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.UUID,
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM("admin", "active", "disabled"),
        defaultValue: "active",
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.UUID
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      updatedBy: {
        type: Sequelize.UUID
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      deletedBy: {
        type: Sequelize.UUID
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User')
  }
};
