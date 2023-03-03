const { Sequelize } = require('sequelize');

const connection = new Sequelize("sistema_chamado", "root", "",{
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
.then(function(){
  console.log("Conexão com o banco de dados OK!");
}).catch(function(){
  console.log("Não foi possível gerar a conexão com o banco!");
})

module.exports = connection;