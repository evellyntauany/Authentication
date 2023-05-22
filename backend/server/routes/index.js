const routerUsuarioClient= require("./userClientRoute")
const routerServiceOrder = require("./service_order")
const routerUsuarioAdmin = require("./userAdmRoute")
module.exports = (app)=>{
    app.use(routerUsuarioClient)
    app.use(routerServiceOrder)
    app.use(routerUsuarioAdmin)
}
