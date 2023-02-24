const Sequelize = require('sequelize');
const { database } = require('./config/configDatabase');

const configDatabase = require('./config/configDatabase');

const database = new Sequelize(configDatabase);