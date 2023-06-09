'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Post', [{
      id: '35551a06-e305-11ed-b5ea-0242ac120002',
      title: 'Coper',
      content: 'I worked on the development of a mobile tracking application (similar to Uber), along with a website for the companies that manage the users. I developed the back end in NodeJS using NestJS framework and TypeORM. I built and maintained the mobile application in React Native and Material UI. I also contributed to the website made in ReactJs and Material UI. I participated in the architecture of the database, using postgressql. I used docker for local testing.',
      tag: ['Work', 'Profile'],
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
