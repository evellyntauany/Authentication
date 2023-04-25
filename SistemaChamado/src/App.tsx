import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { RequireAuthAdm } from "./contexts/CrudUsers/RequireAuthAdm";

import HomeAdm from "./pages/usuario_adm/HomeAdm";
import ListUsuarios from "./pages/usuario_adm/Crud/ListUsuarios";
import PageLogginAdm from "./pages/usuario_adm/PageLogginAdm";
import RegisterUsuario from "./pages/usuario_adm/RegisterUsuario";
import Update from "./pages/usuario_adm/Crud/Update";

import Home from "./pages/Home";
import Navbar from "./pages/usuario_cliente/Navbar";
import PageAcess from "./pages/usuario_cliente/PageAcess";
import PageLoggin from "./pages/PageLoggin";
import Register from "./pages/Register";
import Profile from "./pages/Profile/index";
import Create from "./pages/usuario_cliente/CrudChamado/Create"
import './AppStyle.css'



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLoggin" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="PageAcess" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        <Route path="/logginAdm" element={<RequireAuthAdm><PageLogginAdm/></RequireAuthAdm>} />
        <Route path="/admin" element={<RequireAuthAdm><HomeAdm/></RequireAuthAdm>} />
        <Route path="/listUsuarios" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/RegisterUsers" element={<RegisterUsuario/>}/>
        <Route path="/user/:id" element={<Update/>}/>
        <Route path="/create/chamado" element={<Create/>}/>

        
      </Routes>
  );
}

export default App;
