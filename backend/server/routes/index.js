const routerUsuarioClient= require("./userClientRoute")
const routerServiceOrder = require("./service_order")
const routerMensagens = require("./mensagens")
module.exports = (app)=>{
    app.use(routerUsuarioClient)
    app.use(routerServiceOrder)
    app.use(routerMensagens)
}
