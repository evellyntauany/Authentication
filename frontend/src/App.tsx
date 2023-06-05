import { Route, Routes, useParams } from 'react-router-dom'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { PermissionType } from './types/PermissionType'

import ListUsuarios from './pages/usuario_adm/Crud/ListUsuarios'
import Update from './pages/usuario_adm/Crud/Update'

import Home from './pages/Home'
import Navbar from './pages/usuario_cliente/Navbar'
import Register from './pages/Register'
import Profile from './pages/Profile/index'
import Create from './pages/usuario_cliente/CrudChamado/Create'
import ListChamadosId from './pages/usuario_cliente/CrudChamado/ListChamadosId'
import PrivateRoute from './contexts/Auth/PrivateRoute'
import PageError from './pages/Error'
import Boarding from './pages/usuario_adm/Boarding'
import Loggin from './pages/Loggin'
import ListChamados from './pages/usuario_colab/ListChamados'
import ListOne from './pages/usuario_colab/ListOne'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/erro" element={<PageError />} />
        <Route path="/chamados" element={<ListChamadosId></ListChamadosId>} />
        <Route path="/allchamados" element={<ListChamados />} />
        <Route path="/login" element={<Loggin/>} />
     
        <Route path="/listUsuarios" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/user/:id" element={<Update />} />
        <Route path="/create/chamado" element={<Create />} />
        <Route path="/Profile" element={<Profile />} />
   
        <Route path="/" element={<Home />} />
        <Route path="/call/:id" element={<MeuComponenteWrapper/>} />
        <Route path="/login" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/boarding" element={<Boarding />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}


const MeuComponenteWrapper: React.FC = () => {
  const { id } = useParams();
 console.log('id da pagina:', id)
 const idVindo = id
  return <ListOne idCall={idVindo} />;
};

export default App
