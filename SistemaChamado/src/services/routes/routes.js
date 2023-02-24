const express = require('express');
const path = require('path');

const routes = express.Router()

routes.get("/", (req, res) => {
    return sendFile(path.join(__dirname + '../pages/PageLoggin/index.tsx'));
})

module.exports = routes;