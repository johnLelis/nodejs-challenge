// db/sequelize.js
const { Sequelize } = require('sequelize');
const dbConfig = require('../../config/database');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
console.log('***env');
console.log(JSON.stringify(env, null, 2));
console.log('***dbConfig[env]');
console.log(JSON.stringify(dbConfig[env], null, 2));
const sequelize = new Sequelize(dbConfig[env]);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
