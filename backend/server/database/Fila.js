const Sequelize = require('sequelize');
const db = require('./dataBase');

const Fila = db.define('Fila', {
    idFila: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoFila: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isIn: [[1, 2, 3, 4, 5]] // Define: 1 - Informática (TI), 2 - Recursos Humanos (RH), 3 - Compras, 4 - Operações, 5 - Marketing
        }
    },
    descricao: {
        type: Sequelize.ENUM('Informática (TI)', 'Recursos Humanos (RH)', 'Compras', 'Operações', 'Marketing'),
        allowNull: false,
        defaultValue: 'Informática (TI)'
    }

});

// Verifica se a alteração na tabela
Fila.sync();

module.exports = Fila;