const Sequelize = require('sequelize');
const db = require('./dataBase');
const User = require('./User');
const Solicitacao = require('./Solicitacao_ServiceOrder');
const Status = require('./Status_ServiceOrder');

const Service_order = db.define('service_order', {
    idService_order: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Define a relação entre Chamado e Usuário
Service_order.belongsTo(User, { foreignKey: 'userId' });

// Define a relação entre Chamado e Tipo de Solicitação
Service_order.belongsTo(Solicitacao, { foreignKey: 'idSolicitacao_ServiceOrder' });

// Define a relação entre Chamado e Tipo de Solicitação
Service_order.belongsTo(Status, { foreignKey: 'idStatus_ServiceOrder' });

// Verifica se a alteração na tabela
Service_order.sync();

module.exports = Service_order;