const express = require('express');
const app = express();
//const routes = require('./routes/routes.js');

app.use(express.json());

const cors = require('cors');

app.use(cors());

const User = require('./server/database/User');

//const database = require('./database/dataBase.js');

app.post('/cadastrar', async (req, res) => {
  const email = req.body.email;

  try {
    // Verificar se o usuário já está registrado
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({ message: 'Este email já está sendo usado.' });
    }else{
      const newUser = await User.create(req.body)
      console.log("email cadastrado com sucesso")
      return res.status(201).json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

app.post('/signin', async function(req, res){
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
  }
  return res.send(user)
  });

app.listen(3006, () =>{
    console.log("Servidor inciado na porta 3030");
});