const express = require('express');
const router = express.Router();
const Service_order = require('../database/Service_order');

//Cria chamado
router.post('/chamados', async (req, res) => {
  try {
    const {
      description,
      userId
    } = req.body;
    const post = await Service_order.create({
      description,
      userId: userId
    });
    res.json(post);
  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao criar um chamado.'
    });
  }
});

//Busca todos os chamados

router.get("/allchamados", async (req, res) => {
  await Service_order.findAll({
<<<<<<< HEAD
      attributes: ['id', 'description', 'status', 'createdAt', 'userId']
    })
=======
    attributes: ['id', 'description', 'status', 'createdAt', 'userId']
  })
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
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
})
<<<<<<< HEAD

=======
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
//Chamados por tipo
/*
router.get('/chamadoTipo/:tipoSolicitacao', async (req, res) => {
  const userId = req.params.id;

  try {
   
    const service_order = await Service_order.findAll({ where: { UserId: userId } });
    if (!service_order) {
    return res.status(404).json({ error: 'Chamado não encontrado.' });
    }
    if(service_order){
    return res.json(service_order);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar o chamado.' });
  }
});
*/

//Atualiza chamado por ID
router.put('/atualizaChamado/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
    });
    await service_order.update(req.body);
    return res.json({
      service_order
    });
  } catch (error) {

    return res.status(500).json({
      error: 'Erro ao atualizar o chamado.'
    });
  }
});


//Le os chamados por ID do chamado
router.get('/chamadoOne/:id', async (req, res) => {
  const id = req.params.id;
  console.log('id vindo -->>>', id);
  try {

    const service_order = await Service_order.findAll({
      where: {
        id: id
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
<<<<<<< HEAD

//Le os chamados por ID do UserId criador do chamado {busca todos os chamados que o user criou}
router.get('/chamadoId/:id', async (req, res) => {
  const userId = req.params.id;
 console.log('id vindo -->>>',userId);
  try {

=======

//Le os chamados por ID do UserId criador do chamado {busca todos os chamados que o user criou}
router.get('/chamadoId/:id', async (req, res) => {
  const userId = req.params.id;
  console.log('id vindo -->>>', userId);
  try {

>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
    const service_order = await Service_order.findAll({
      where: {
        userId: userId
      }
    });
    console.log("Chamadossss>>>>>", service_order)
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

//Atualiza chamado por ID
router.put('/atualizaChamado/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
<<<<<<< HEAD
    });
    await service_order.update(req.body);
    return res.json({
      service_order
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Erro ao atualizar o chamado.'
    });
  }
});

 //Deleta chamado por ID (Alterar o nome despois para cancelado)
 router.put('/deleteChamado/:id', async (req, res) => {
=======
    });
    await service_order.update(req.body);
    return res.json({
      service_order
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Erro ao atualizar o chamado.'
    });
  }
});

//Deleta chamado por ID (Alterar o nome despois para cancelado)
router.put('/deleteChamado/:id', async (req, res) => {
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
    });

    service_order.status = 'cancelado'; // Atualiza o campo 'status' para 'cancelado'
    await service_order.save(); // Salva a alteração no banco de dados

    return res.json({
      message: 'Chamado excluído com sucesso.'
<<<<<<< HEAD
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao excluir o chamado.'
    });
=======
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao excluir o chamado.'
    });
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
  }
});

router.put('/chamadoPendenteUser/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
    });

    service_order.status = 'pendente_usuário'; // Atualiza o campo 'status' para 'cancelado'
    await service_order.save(); // Salva a alteração no banco de dados

    return res.json({
      message: 'Chamado excluído com sucesso.'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Erro ao excluir o chamado.'
    });
  }
});

<<<<<<< HEAD

=======
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
router.put('/chamadoPendenteSolicitante/:id', async (req, res) => {
  try {
    const service_order = await Service_order.findByPk(req.params.id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
    });

    service_order.status = 'pedente_solucionado'; // Atualiza o campo 'status' para 'cancelado'
    await service_order.save(); // Salva a alteração no banco de dados

    return res.json({
      message: 'Chamado excluído com sucesso.'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Erro ao excluir o chamado.'
    });
  }
});

<<<<<<< HEAD


// Rota para atualizar o status de um chamado
router.put('/status', async (req, res) => {
  const {
    status,id
  } = req.body;
  try {
    const service_order = await Service_order.findByPk(id);
    if (!service_order) return res.status(404).json({
      error: 'Chamado não encontrado.'
    });

    service_order.status = status; // Atualiza o campo 'status' para 'cancelado'
    await service_order.save(); // Salva a alteração no banco de dados

    return res.json({
      message: 'Chamado excluído com sucesso.'
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao excluir o chamado.'
    });
  }
});



=======
>>>>>>> 2b8eca05a6a5e18a08ca629a0cc4ac1544aecf38
module.exports = router;