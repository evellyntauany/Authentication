const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());

const router = require("../backend/server/routes/index")
router(app)






app.listen(3006, () => {
  console.log("Servidor inciado na porta 3006");
});

