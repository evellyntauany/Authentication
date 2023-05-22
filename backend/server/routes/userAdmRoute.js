const express = require('express');
const routerAdm = express.Router();
const UserAdm = require('../database/User_admin')
const connection = require('../database/dataBase')



//Login de usuario adm 
routerAdm.post('/signinAdm', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(">>email",emaila)
    console.log(">>senha",password)
  
    try {
      const userAdm = await UserAdm.findOne({ where: { email: email } });
      console.log("se encontrou o user>>", userAdm)
      if (!userAdm) {
        return res.status(400).send("Não localizamos o name!");
      }
  
      //const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (userAdm.password == password) {
        res.send(userAdm);
      } else {
        res.status(403).json({ error: 'Senha incorreta' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao logar' });
    }
  });
  
  


//Cadastrar user admin
routerAdm.post('/register_admin', async (req, res) => {
    const email = req.body.email;
   
    try {
      // Verificar se o usuário já está registrado
      const user = await UserAdm.findOne({ where: { email } });
      const salt = await bcrypt.genSalt(10);
      if (user) {
        return res.status(409).json({ message: 'Este email já está sendo usado.' });
      } else {
        var usr = {
          name: req.body.name,
          email: req.body.email,
          password: await bcrypt.hash(req.body.password, salt)
        };
        created_user = await User_admin.create(usr);
        res.status(201).json(created_user);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
  });

  module.exports = routerAdm;