const Sequelize = require('sequelize');
const db = require('./dataBase');

const Solicitacao_ServiceOrder = db.define('Solicitacao_ServiceOrder', {
    idSolicitacao_ServiceOrder: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoSolicitacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isIn: [[1, 2, 3, 4, 5, 6]] // Define: 1 - Formatar computador, 2 - Sem internet, 3 - Sem vídeo no computador, 4 - Computador lento, 5 - USB não funciona, 6 - Instalar impressora
        }
    }
});

// Verifica se a alteração na tabela
Solicitacao_ServiceOrder.sync();

module.exports = Solicitacao_ServiceOrder;