const express = require('express');
const routerAdm = express.Router();
const User = require('../database/User')
const connection = require('../database/dataBase')


//Listando todos os chamados registrados
routerAdm.get("/allCall", async (req, res) => {
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