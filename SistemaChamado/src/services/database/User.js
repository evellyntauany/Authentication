//Cria a tabela 'User' quando não existir a tabela no banco de dados
const Sequelize = require('sequelize');
const db = require('./dataBase');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Verificar se a alteração na tabela
User.sync();

module.exports = User;