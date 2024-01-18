'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserSettings', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      preferredTheme: {
        type: Sequelize.ENUM('light', 'dark', 'system'),
        defaultValue: 'system',
      },
      resultsPerPage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 20,
      },
      sendEmail: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserSettings');
  },
};
