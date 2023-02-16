const express = require('express');
const app = express();

const db = require('./models/bd');

app.get("/", async (req, res) => {
    res.send("Página inicial");
})

app.post("/", async (req, res) => {
    res.send("Página cadastrar");
})

app.listen(8080, () =>{
    console.log("Servidor inciado na porta 8080");
});