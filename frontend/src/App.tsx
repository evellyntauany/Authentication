import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { PermissionType } from './types/PermissionType'

import ListUsuarios from './pages/usuario_adm/Crud/ListUsuarios'
import Update from './pages/usuario_adm/Crud/Update'

import Home from './pages/Home'
import Navbar from './pages/usuario_cliente/Navbar'
import PageAcess from './pages/usuario_cliente/PageAcess'
import Register from './pages/Register'
import Profile from './pages/Profile/index'
import Create from './pages/usuario_cliente/CrudChamado/Create'
import ListChamados from './pages/usuario_cliente/CrudChamado/ListChamados'
import PrivateRoute from './contexts/Auth/PrivateRoute'
import PageError from './pages/Error'
import Boarding from './pages/usuario_adm/Boarding'
import Loggin from './pages/Loggin'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/erro" element={<PageError />} />
        <Route path="/chamados" element={<ListChamados />} />
        <Route path="/login" element={<Loggin/>} />
     
        <Route path="/listUsuarios" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/user/:id" element={<Update />} />
        <Route path="/create/chamado" element={<Create />} />
   
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/boarding" element={<Boarding />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
