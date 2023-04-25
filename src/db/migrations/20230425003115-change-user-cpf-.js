'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('User', 'cpf', {
      type: Sequelize.STRING
    })
    queryInterface.changeColumn('User', 'phone', {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn('User', 'cpf', {
      type: Sequelize.INTEGER
    })
    queryInterface.changeColumn('User', 'phone', {
      type: Sequelize.INTEGER
    })
  }
};
