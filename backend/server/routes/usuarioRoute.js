const {Router} = require("express")
const router = Router();
const admUserController = require("../controllers/admUserController")

router.get("/admin/users" ,(req, res) => {
    const resposta = admUserController.buscar();
    res.send(resposta);
});

router.post("/admin/users" ,(req, res) => {
    res.send("criando um novo usuario")
});

router.put("/admin/users/:id" ,(req, res) => {
    const {id} = req.params
    res.send(`atualizando o usuario ${id}`)
});

router.put("/admin/users/:id" ,(req, res) => {
    const {id} = req.params
    res.send(`criando um novo usuario ${id}`)
});

module.exports = router;