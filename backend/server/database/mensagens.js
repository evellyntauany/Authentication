const { DataTypes } = require('sequelize');
const Usuario = require('./User');
const Chamado = require('./Service_order');

const Mensagem = sequelize.define('mensagem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conteudo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Mensagem.belongsTo(Usuario, { foreignKey: 'usuarioId' }); // Relação: uma mensagem pertence a um usuário
Mensagem.belongsTo(Chamado, { foreignKey: 'chamadoId' }); // Relação: uma mensagem pertence a um chamado

module.exports = Mensagem;
