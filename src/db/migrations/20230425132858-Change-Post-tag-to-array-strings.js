'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn('Post', 'tag', {
      type: Sequelize.ARRAY(Sequelize.STRING)
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('Post', 'tag', {
      type: Sequelize.STRING
    })
  }
};
