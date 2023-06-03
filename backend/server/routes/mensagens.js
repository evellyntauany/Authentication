const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const mensagem = require('../database/mensagens');
const router = express.Router();
const Usuario = require('../database/User');
const Chamado = require('../database/Service_order');

app.use(express.json());
const cors = require('cors');
app.use(cors());


// cria mensagem no banco 
router.post('/mensagens', async (req, res) => {
try {
    const {
        conteudo,
        usuarioId,
        chamadoId
    } = req.body;
    console.log(' chamadoId->>', chamadoId)
    console.log(' mensagem->>', conteudo)
    console.log(' id do user que ta respondendo->>', usuarioId)

    // Verifique se o usuário respondente e o chamado existem no banco de dados
    const usuario = await Usuario.findByPk(usuarioId);
    const chamado = await Chamado.findByPk(chamadoId);

    if (!usuario || !chamado) {
        return res.status(404).json({
            message: 'Usuário ou chamado não encontrado'
        });
    }

    // Crie a resposta e associe-a ao usuário respondente e ao chamado
    const resposta = await mensagem.create({
        conteudo: conteudo,
        usuarioId: usuarioId,
        chamadoId: chamadoId,
    });

    return res.status(201).json(resposta);
} catch (error) {
    console.error('Erro ao criar resposta:', error);
    return res.status(500).json({
        message: 'Erro ao criar resposta'
    });
}
});


 // Busca todas as mensagens no banco de dados
router.get('/mensagens', (req, res) => {
   
    mensagem.find({}, (err, mensagens) => {
        if (err) {
            console.error('Erro ao buscar mensagens:', err);
            res.status(500).json({
                error: 'Erro ao buscar mensagens'
            });
        } else {
            res.status(200).json(mensagens);
        }
    });
});

// obtem todas as mensagens do banco com o id do chamado vinculado
router.get('/mensagens/:id', async (req, res) => {
    const chamadoId = req.params.id;

    try {
        const mensagenss = await mensagem.findAll({
          where: {
            chamadoId: chamadoId
          }
        });

        if (!mensagem) {
            res.status(404).json({
                error: 'Mensagem não encontrada'
            });
        } else {
            res.status(200).json(mensagenss);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          error: 'Erro ao buscar o chamado.'
        });
      }
    });


    
router.put('/mensagens/:id', (req, res) => {
    const messageId = req.params.id; // Obtém o ID da mensagem a partir dos parâmetros da rota
    const {
        user,
        message
    } = req.body; // Assume que o corpo da requisição contém o usuário e a mensagem atualizados

    // Atualiza a mensagem pelo ID no banco de dados
    mensagem.findByIdAndUpdate(messageId, {
        user,
        message
    }, {
        new: true
    }, (err, mensagemAtualizada) => {
        if (err) {
            console.error('Erro ao atualizar mensagem:', err);
            res.status(500).json({
                error: 'Erro ao atualizar mensagem'
            });
        } else if (!mensagemAtualizada) {
            res.status(404).json({
                error: 'Mensagem não encontrada'
            });
        } else {
            res.status(200).json(mensagemAtualizada);
        }
    });
});

module.exports = router;