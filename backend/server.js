const express = require('express');
const app = express();
//const routes = require('./routes/routes.js');

app.use(express.json());

const cors = require('cors');

app.use(cors());

const User = require('./server/database/User');
const { toast } = require('react-toastify');

//const database = require('./database/dataBase.js');

app.post('/cadastrar', async (req, res) => {
  const email = req.body.email;

  try {
    // Verificar se o usuário já está registrado
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ error: 'O email já está em uso' });
    }else{
      await User.create(req.body)
      console.log("email cadastrado com sucesso")
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

app.post('/signin', function(req, res){
    const user = new User({
      email: req.body.email,
      senha: req.body.senha
    });
  
    req.login(user, function(err){
      if (err) {
        console.log(err);
      }
      else {
        passport.authenticate("local")(req, res, function(){
          res.send(user);
        });
      }
    });
  });

app.listen(3006, () =>{
    console.log("Servidor inciado na porta 3030");
});