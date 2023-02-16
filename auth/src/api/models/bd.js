const { Sequelize } = require('sequelize');

const connection = new Sequelize("sistema_chamado", "root", "",{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;