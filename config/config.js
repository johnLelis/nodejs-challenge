require('dotenv').config();
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, 'config.json'))[env];

console.log(`***config : ENV ${env}`);
console.log(JSON.stringify(config, null, 2));

const hostEnvVariable = env === 'test' ? 'localhost' : 'POSTGRES_HOST';
config.host = process.env[hostEnvVariable] || 'localhost';

module.exports = config;
