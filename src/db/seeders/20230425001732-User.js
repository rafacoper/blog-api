'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      id: '8d8bc566-6a75-4f36-914e-6d4cfec8466b',
      firstName: 'Rafael',
      lastName: 'Coper',
      cpf: '16262332545',
      phone: '31956535365',
      email: 'rafael.coper@emailexample.com',
      role: 'admin',
      createdAt: '2023-04-24 21:43:25.989 -0300',
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      deletedAt: null,
      deletedBy: null,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
