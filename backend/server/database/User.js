//Cria a tabela 'User' quando não existir a tabela no banco de dados
const Sequelize = require('sequelize');
const db = require('./dataBase');

const User = db.define('users', {
    userId : {
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
    },
    userType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 3,
        validate: {
            isIn: [[1, 2, 3]] // Define 1 - Administrador, 2 - Colaborador, 3 Cliente (Solucionador)
             
        }
    }
});

//Verificar se a alteração na tabela
User.sync();

module.exports = User;