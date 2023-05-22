const express = require('express');
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());
const cors = require('cors');
app.use(cors());


const router = require("../backend/server/routes/index")
router(app)


const User = require('./server/database/User');

//ADM
const User_admin = require('./server/database/User_admin');

const service_order = require('./server/database/Service_order');





app.listen(3006, () => {
  console.log("Servidor inciado na porta 3006");
});

