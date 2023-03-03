const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.use(express.json());

const cors = require('cors');

app.use(cors());

const User = require('./database/User.js');

//const database = require('./database/dataBase.js');

app.post('/cadastrar', async (req,res) => {
    console.log('Resposta: ' + res.User);
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    await User.create(req.body)
    .then(() => {
        console.log('Cadastrado');
    }).catch(() =>{
        console.log('Não cadastrado');
    })
})

app.listen(3030, () =>{
    console.log("Servidor inciado na porta 3030");
});