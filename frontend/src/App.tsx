import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import {PermissionType} from './types/PermissionType'

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



function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/erro" element={<PageError />} />
      
      <Route path="/Profile" element={
      <PrivateRoute
        redirectPath="/Profile"
        component={Profile}
        permission={PermissionType.TYPE_3}
      />
    } />

        <Route
          path="/Login"
          element={
            <RequireAuth>
              <PageAcess />
            </RequireAuth>
          }
        />
        <Route
          path="PageAcess"
          element={
            <RequireAuth>
              <PageAcess />
            </RequireAuth>
          }
        />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/chamados" element={<ListChamados />} />
        <Route path="/" element={<Home />} />

        <Route path="/listUsuarios" element={<ListUsuarios></ListUsuarios>} />
        <Route path="/user/:id" element={<Update />} />
        <Route path="/create/chamado" element={<Create />} />
       
      </Routes>
    </>
  )
}

export default App
