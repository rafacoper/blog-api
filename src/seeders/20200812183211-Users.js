module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 115641,
        firstName: 'Rafael',
        lastName: 'Barbosa',
        cpf: 12312313256,
        phone: 31995632145,
        email: 'rafael@gmail.com',
      },
      {
        id: 25151,
        firstName: 'Caia',
        lastName: 'Lages',
        cpf: 95868545755,
        phone: 31998832145,
        email: 'rafael@gmail.com',
      }],
  )},

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
