const express = require('express');
const router = express.Router();
const Service_order = require('../database/Service_order');

//Cria chamado
router.post('/chamados', async (req, res) => {
  try {
    console.log(req.body)
    const { description, userId } = req.body;
    const post = await Service_order.create({ description, UserId: userId });
    res.json(post);
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
router.get('/chamadoId/:id', async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
   
    const service_order = await Service_order.findAll({ where: { UserId: userId } });
    console.log("Chamadossss>>>>>",service_order)
    if (!service_order) {
    return res.status(404).json({ error: 'Chamado não encontrado.' });
    }
    if(service_order){
    return res.json(service_order);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao buscar o chamado.' });
  }
});

//Atualiza chamado por ID
router.put('/atualizaChamado/:id', async (req, res) => {
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
router.put('/deleteChamado/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({ error: 'Chamado não encontrado.' });
    
    service_order.status = 'cancelado'; // Atualiza o campo 'status' para 'cancelado'
    await service_order.save(); // Salva a alteração no banco de dados
    
    return res.json({ message: 'Chamado excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao excluir o chamado.' });
  }
});

module.exports = router;