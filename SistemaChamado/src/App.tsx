import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import HomeAdm from "./pages/usuario_adm/HomeAdm";
import ListUsuarios from "./pages/usuario_adm/ListUsuarios";
import PageLogginAdm from "./pages/usuario_adm/PageLogginAdm";
import RegisterUsuario from "./pages/usuario_adm/RegisterUsuario";
import Update from "./pages/usuario_adm/Update";

import Home from "./pages/Home";
import Navbar from "./pages/usuario_cliente/Navbar";
import PageAcess from "./pages/usuario_cliente/PageAcess";
import PageLoggin from "./pages/PageLoggin";
import Register from "./pages/Register";
import Profile from "./pages/Profile/index";
import './AppStyle.css'



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLoggin" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="PageAcess" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        <Route path="/logginAdm" element={<PageLogginAdm/>} />
        <Route path="/admin" element={<HomeAdm></HomeAdm>} />
        <Route path="/listUsuarios" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/RegisterUsers" element={<RegisterUsuario/>}/>
        <Route path="/user/:id" element={<Update/>}/>

        
      </Routes>
  );
}

export default App;
