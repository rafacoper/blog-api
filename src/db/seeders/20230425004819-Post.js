'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Post', [{
      id: '35551a06-e305-11ed-b5ea-0242ac120002',
      title: 'Coper',
      content: '16262332545',
      tag: '31956535365',
      createdAt: '2023-04-24 21:43:25.989 -0300',
      createdBy: '8d8bc566-6a75-4f36-914e-6d4cfec8466b',
      updatedAt: null,
      updatedBy: null,
      deletedAt: null,
      deletedBy: null,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Post', null, {});
  }
};
