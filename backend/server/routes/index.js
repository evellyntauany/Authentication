const routerUsuarioClient= require("./userClientRoute")
const routerServiceOrder = require("./service_order")
module.exports = (app)=>{
    app.use(routerUsuarioClient)
    app.use(routerServiceOrder)
}
