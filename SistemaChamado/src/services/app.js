const express = require('express');
const app = express();
const User = require('./models/User.js');

app.get("/", async (req, res) => {
    res.sendFile(__dirname, '../App.tsx');
})

app.post("/", async (req, res) => {
    res.send("Página cadastrar");
})

app.listen(3030, () =>{
    console.log("Servidor inciado na porta 3030");
});