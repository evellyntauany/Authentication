const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const User_admin = require('./User_admin');

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.post('/signin', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  
  try {
    const user = await User_admin.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).send("Usuário não encontrado!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(403).json({ error: 'Senha incorreta' });
    }

    //Verifica se o usuário é um administrador
    if (user.isAdmin) {
      res.redirect('/'); //Redireciona para página do admin
    } else {
      res.redirect('/'); //Redireciona para página do usuário comum
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao logar' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});