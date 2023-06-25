const express = require('express');
const router = express.Router();
const Status_ServiceOrder = require('../database/Status_ServiceOrder');

//Cria 
router.post('/status_serviceorder', async (req, res) => {
    try {
        const {
            status,

        } = req.body;
        const post = await Status_ServiceOrder.create({
            status,
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
router.get("/allsolicitacaoStatus", async (req, res) => {
    await Service_order.findAll({
        attributes: ['idStatus_ServiceOrder', 'status']
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
router.get('/solicitacaoStatus/:id', async (req, res) => {
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