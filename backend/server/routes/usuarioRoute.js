const {Router} = require("express")
const router = Router();
const admUserController = require("../controllers/admUserController")
const User = require('../database/User')
const connection = require('../database/dataBase')

router.get("/admin/users" ,async (req, res) => {
    await User.findAll({
        attributes:['id','name','email']
    })
    .then((data)=>{
        return res.json({data})
    }).catch(()=>{
        return res.status(400).json({ error:true,mensagem:"errooooo"})
    })
 
});




router.delete("/delete/:id" ,(req, res) => {
    const {id} = req.params
    console.log("o id deletado",id)
 
  //  let SQL = "DELETE FROM users WHERE id= ?"
   // User.query(SQL,[id])
});

router.put("/update/:id" ,(req, res) => {
    const id = req.params.id;
    console.log("atualizacao do usuario com id ", id)
    const { name, email } = req.body;
    console.log("atualizacao :", name)
   // let SQL = "UPDATE FROM users SET `name` = ?, `email` = ?, `password` = ? WHERE id =?"
   // User.query(SQL,[id])
});

router.put("/updateId/:id" ,(req, res) => {
    const id = req.params.id;
    console.log("atualizacao do usuario com id ", id)
    const { name, email } = req.body;
    console.log("atualizacao :", name)
    let SQL = "UPDATE FROM users SET `name` = ?, `email` = ?, `password` = ? WHERE id =?"
   // User.query(SQL,[id])
});


router.put("/admin/users/:id" ,(req, res) => {
    const {id} = req.params
    res.send(`criando um novo usuario ${id}`)
});

router.get("/search/:id" ,async (req, res) => {
    const id = req.params.id;
     await User.findByPk(id).then(user => {
        userN=[
            user.name,
            user.email
        ]
    res.send(userN);
    })
  });



module.exports = router;