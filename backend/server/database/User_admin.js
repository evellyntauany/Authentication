//Cria a tabela 'User' quando não existir a tabela no banco de dados
const Sequelize = require('sequelize');
const db = require('./dataBase');

const User_admin = db.define('users_admin', {
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
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Verificar se a alteração na tabela
User_admin.sync();

module.exports = User_admin;