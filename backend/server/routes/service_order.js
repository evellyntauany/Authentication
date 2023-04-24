const express = require('express');
const router = express.Router();
const db = require('../server/database/dataBase');
const Service_order = require('../server/database/Service_order');

//Cria chamado
router.post('/chamados', async (req, res) => {
  try {
    const service_order = await Service_order.create(req.body);
    return res.status(201).json({ service_order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao criar um chamado.' });
  }
});

//Le os chamados
router.get('/chamados', async (req, res) => {
  try {
    const service_orders = await Service_order.findAll();
    return res.json({ service_orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao buscar os chamados.' });
  }
});

//Le os chamados por ID
router.get('/chamados/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({ error: 'Chamado não encontrado.' });
    return res.json({ service_order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao buscar o chamado.' });
  }
});

//Atualiza chamado por ID
router.put('/chamados/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({ error: 'Chamado não encontrado.' });
    await service_order.update(req.body);
    return res.json({ service_order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao atualizar o chamado.' });
  }
});

//Deleta chamado por ID
router.delete('/chamados/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({ error: 'Chamado não encontrado.' });
    await service_order.destroy();
    return res.json({ message: 'Chamado excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao excluir o chamado.' });
  }
});

module.exports = router;