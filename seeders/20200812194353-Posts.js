module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Posts',
      [
        {
          id: 454565653,
          title: 'Post of the year',
          content: 'Somebodylove',
          tag: 'Cringe',
          publishedAt: new Date('2023-03-01T19:58:00.000Z'),
          publishedBy: 25151,
        },
        {
          id: 4576565,
          title: 'Lets roll',
          content: 'Rockn roll',
          tag: 'Rock',
          publishedAt: new Date('2023-03-01T19:58:00.000Z'),
          publishedBy: 25151,
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
