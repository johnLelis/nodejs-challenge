require('dotenv').config();

const dbConfig = {
  development: {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
  },
  test: {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT_TEST || 5433,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_TEST,
    logging: false,
  },
};

module.exports = dbConfig;
