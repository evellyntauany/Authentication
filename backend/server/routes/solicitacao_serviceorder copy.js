const express = require('express');
const router = express.Router();
const Solicitacao_ServiceOrder = require('../database/Solicitacao_ServiceOrder');

//Cria 
router.post('/solicitacao_serviceorder', async (req, res) => {
    try {
        const {
            tipoSolicitacao,

        } = req.body;
        const post = await Solicitacao_ServiceOrder.create({
            tipoSolicitacao,
        });
        res.json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Erro ao criar um chamado.'
        });
    }
});

//Busca todas as solicitações
router.get("/allsolicitacaoServiceOrder", async (req, res) => {
    await Service_order.findAll({
        attributes: ['idSolicitacao_ServiceOrder', 'tipoSolicitacao']
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

//Le as solicitações  por ID do chamado
router.get('/solicitacaoService/:id', async (req, res) => {
    const tipoSolicitacao = req.params.tipoSolicitacao;
    console.log('id vindo -->>>', tipoSolicitacao);
    try {

        const service_order = await Service_order.findAll({
            where: {
                tipoSolicitacao: tipoSolicitacao
            }
        });
        console.log("Chamado>>>>>", service_order)
        if (!service_order) {
            return res.status(404).json({
                error: 'Chamado não encontrado.'
            });
        }
        if (service_order) {
            return res.json(service_order);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Erro ao buscar o chamado.'
        });
    }
});

module.exports = router;