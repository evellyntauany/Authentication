const express = require('express');
const routerClient = express.Router();
const User = require('../database/User')
const connection = require('../database/dataBase')
const bcrypt = require("bcrypt");

//Listando todos os usuarios clientes do banco 
routerClient.get("/admin/users", async (req, res) => {
    await User.findAll({
            attributes: ['userId', 'name', 'email','userType']
        })
        .then((data) => {
            return res.json({
                data
            })
        }).catch(() => {
            return res.status(400).json({
                error: true,
                mensagem: "errooooo"
            })
        })

});

//Deletando usuarios clientes do banco 
routerClient.delete("/delete/:id", (req, res) => {
    const {
        id
    } = req.params

    connection.query(`DELETE FROM users WHERE userId = ${id}`, (error, results) => {
        if (error) throw error;
      
    });
});

//Alterar um usuário cliente no banco
routerClient.put('/updateId/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Verificar se o usuário existe
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: 'Usuário não encontrado.'
            });
        }

        // Atualizar os dados do usuário
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao atualizar usuário'
        });
    }
});

//Atualizando informacoes de um id  de usuario cliente especifico 
routerClient.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const {
        name,
        email
    } = req.body;
    
    let SQL = "UPDATE FROM users SET `name` = ?, `email` = ?, `password` = ? WHERE id =?"
    // User.query(SQL,[id])
});


//Recuperando informacoes de um ID especificio usuario cliente
routerClient.get("/search/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        // Encontre o registro no banco de dados pelo ID
        const user = await User.findByPk(userId);
    
        if (!user) {
            return res.status(404).send({
                message: 'Registro não encontrado'
            });
        }
        
        const userData = user.toJSON(); // Converta o objeto retornado pelo Sequelize em um objeto JSON
        res.json(userData); // Envie o objeto como resposta para o cliente
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Erro ao buscar o registro'
        });
    }
});

// Rota de cadastro usuario cliente
routerClient.post('/cadastrar', async (req, res) => {
    const email = req.body.email;
     const userType= req.body.selectedOption

    try {
        // Verificar se o usuário já está registrado
        const user = await User.findOne({
            where: {
                email
            }
        });
    
        const salt = await bcrypt.genSalt(10);
       
        if (user) {
            return res.status(409).json({
                message: 'Este email já está sendo usado.'
            });
        } else {
            var usr = {
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, salt),
                userType: req.body.selectedOption
            };
            created_user = await User.create(usr);
            res.status(200).json(created_user);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao registrar usuário'
        });
    }
});

//Login de usuario cliente 
routerClient.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        where: { email: email }
      }).then(async user => {
        if (user) {
          // O email foi encontrado
         

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
              res.send(user);
          } else {
              res.status(403).json({
                  error: 'Senha incorreta'
              });
          }
          
        } else {
          // O email não foi encontrado
        
        }
      }).catch(error => {
        console.error(error);
      });

});


module.exports = routerClient;