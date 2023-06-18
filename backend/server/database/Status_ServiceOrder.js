const Sequelize = require('sequelize');
const db = require('./dataBase');

const Status_ServiceOrder = db.define('Status_ServiceOrder', {
    idStatus_ServiceOrder: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isIn: [[1, 2, 3, 4, 5, 6]] // Define: 1 - Aberto, 2 - Encerrado, 3 - Pendente usuário, 4 - Pedente solicitante, 5 - Entregue (Antes de Encerrado), 6 - Cancelado
        }
    }
});

// Verifica se a alteração na tabela
Status_ServiceOrder.sync();

module.exports = Status_ServiceOrder;