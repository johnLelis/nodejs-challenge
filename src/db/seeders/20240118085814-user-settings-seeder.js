'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserSettings', [
      {
        userId: 1,
        preferredTheme: 'light',
        resultsPerPage: 30,
        sendEmail: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        preferredTheme: 'dark',
        resultsPerPage: 50,
        sendEmail: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserSettings', null, {});
  },
};
