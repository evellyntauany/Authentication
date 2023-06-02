//Cria a tabela 'Chamado' quando não existir a tabela no banco de dados

const Sequelize = require('sequelize');
const db = require('./dataBase');
const Usuario = require('./User');
const Chamado = require('./Service_order');

const Mensagem = db.define('mensagem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conteudo: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Mensagem.belongsTo(Usuario, { foreignKey: 'usuarioId' }); // Relação: uma mensagem pertence a um usuário
Mensagem.belongsTo(Chamado, { foreignKey: 'chamadoId' }); // Relação: uma mensagem pertence a um chamado

// Verifica se a alteração na tabela
Mensagem.sync();

module.exports = Mensagem;
