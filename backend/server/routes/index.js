const routerUsuarioClient= require("./userClientRoute")
module.exports = (app)=>{
    app.use(routerUsuarioClient)
}


const routerUsuarioAdm = require("./userClientRoute")
module.exports = (app)=>{
    app.use(routerUsuarioAdm)
}