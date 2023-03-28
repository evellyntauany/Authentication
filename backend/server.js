const express = require('express');
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());
const cors = require('cors');
app.use(cors());


const router = require("../backend/server/routes/index")
router(app)


const User = require('./server/database/User');

//ADM
const User_admin = require('./server/database/User_admin');
const User_admin = require('./server/database/User_admin');

//const database = require('./database/dataBase.js');

app.get('/minha-rota', (req, res) => {
  return res.status(201).json({ message: 'indo' });
});



app.post('/cadastrar', async (req, res) => {
  const email = req.body.email;

  try {
    // Verificar se o usuário já está registrado
    const user = await User.findOne({ where: { email } });
    const salt = await bcrypt.genSalt(10);
    if (user) {
      return res.status(409).json({ message: 'Este email já está sendo usado.' });
    } else {
      var usr = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt)
      };
      created_user = await User.create(usr);
      res.status(201).json(created_user);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});


//Login user normal
app.post('/signin', async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Não localizamos o name!");
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {
      res.send('você logou!');
    } else {
      res.send('não logou!')
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Cadastrar user admin
app.post('/register_admin', async (req, res) => {
  const email = req.body.email;

  try {
    // Verificar se o usuário já está registrado
    const user = await User_admin.findOne({ where: { email } });
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


//Login user normal
app.post('/signin_admin', async function (req, res) {
  try {
    const user = await User_admin.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Não localizamos o name!");
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {
      res.send('você logou!');
    } else {
      res.send('não logou!')
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Alterar um usuário
app.put('/update/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    // Verificar se o usuário existe
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
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
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Rota para renderizar a página com a tabela
app.get('/table', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('users', { users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao recuperar usuários' });
  }
});


app.listen(3006, () => {
  console.log("Servidor inciado na porta 3030");
});

