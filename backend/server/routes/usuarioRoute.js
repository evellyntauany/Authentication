const {
    Router
} = require("express")
const router = Router();
const admUserController = require("../controllers/admUserController")
const User = require('../database/User')
const connection = require('../database/dataBase')

router.get("/admin/users", async (req, res) => {
    await User.findAll({
            attributes: ['id', 'name', 'email']
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

router.delete("/delete/:id", (req, res) => {
    const {
        id
    } = req.params
    console.log("o id deletado", id)

    //  let SQL = "DELETE FROM users WHERE id= ?"
    // User.query(SQL,[id])
});

//Alterar um usuário
router.put('/updateId/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Verificar se o usuário existe
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: 'Usuário não encontrado.'
            });
        }

        // Atualizar os dados do usuário
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao atualizar usuário'
        });
    }
});

//Indo para a pagina do Id user
router.put("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log("atualizacao do usuario com id ", id)
    const {
        name,
        email
    } = req.body;
    console.log("atualizacao :", name)
    let SQL = "UPDATE FROM users SET `name` = ?, `email` = ?, `password` = ? WHERE id =?"
    // User.query(SQL,[id])
});


//Recuperando informacoes de um ID
router.get("/search/:id", async (req, res) => {
    const id = req.params.id;
    await User.findByPk(id).then(user => {
        userN = [
            user.name,
            user.email
        ]
        res.send(userN);
    })
});



module.exports = router;