const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const UserSettings = sequelize.define(
  'UserSettings',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    preferredTheme: {
      type: DataTypes.ENUM('light', 'dark', 'system'),
      defaultValue: 'system',
    },
    resultsPerPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 20,
        max: 100,
      },
      defaultValue: 20,
    },
    sendEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSettings;
