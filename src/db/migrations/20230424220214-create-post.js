'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post', {
      id: {
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      tag: {
        type: Sequelize.STRING
      },
      publishedAt: {
        type: Sequelize.DATE
      },
      publishedBy: {
        type: Sequelize.UUID,
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post');
  }
};
