const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const mensagem = require('../database/mensagens');
const router = express.Router();

app.use(express.json());
const cors = require('cors');
app.use(cors());

router.post('/mensagens', (req, res) => {
    const { user, message } = req.body; // Assume que o corpo da requisição contém o usuário e a mensagem

    // Cria a mensagem no banco de dados
    mensagem.create({ user, message }, (err, novaMensagem) => {
        if (err) {
            console.error('Erro ao criar mensagem:', err);
            res.status(500).json({ error: 'Erro ao criar mensagem' });
        } else {
            res.status(201).json(novaMensagem);
        }
    });
});

router.get('/mensagens', (req, res) => {
    // Busca todas as mensagens no banco de dados
    mensagem.find({}, (err, mensagens) => {
        if (err) {
            console.error('Erro ao buscar mensagens:', err);
            res.status(500).json({ error: 'Erro ao buscar mensagens' });
        } else {
            res.status(200).json(mensagens);
        }
    });
});

router.get('/mensagens/:id', (req, res) => {
    const messageId = req.params.id; // Obtém o ID da mensagem a partir dos parâmetros da rota

    // Busca a mensagem pelo ID no banco de dados
    mensagem.findById(messageId, (err, mensagem) => {
        if (err) {
            console.error('Erro ao buscar mensagem:', err);
            res.status(500).json({ error: 'Erro ao buscar mensagem' });
        } else if (!mensagem) {
            res.status(404).json({ error: 'Mensagem não encontrada' });
        } else {
            res.status(200).json(mensagem);
        }
    });
});

router.put('/mensagens/:id', (req, res) => {
    const messageId = req.params.id; // Obtém o ID da mensagem a partir dos parâmetros da rota
    const { user, message } = req.body; // Assume que o corpo da requisição contém o usuário e a mensagem atualizados

    // Atualiza a mensagem pelo ID no banco de dados
    mensagem.findByIdAndUpdate(messageId, { user, message }, { new: true }, (err, mensagemAtualizada) => {
        if (err) {
            console.error('Erro ao atualizar mensagem:', err);
            res.status(500).json({ error: 'Erro ao atualizar mensagem' });
        } else if (!mensagemAtualizada) {
            res.status(404).json({ error: 'Mensagem não encontrada' });
        } else {
            res.status(200).json(mensagemAtualizada);
        }
    });
});

module.exports = router;