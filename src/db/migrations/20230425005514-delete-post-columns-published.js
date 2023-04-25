'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn('Post', 'publishedAt')
    queryInterface.removeColumn('Post', 'publishedBy')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('Post', 'publishedAt', {
      type: Sequelize.DATE
    })
    queryInterface.addColumn('Post', 'publishedBy', {
      type: Sequelize.INTEGER
    })
  }
};
