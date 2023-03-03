import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import PageAcess from "./pages/PageAcess";
import PageLoggin from "./pages/PageLoggin";
import Register from "./pages/Register";
import './AppStyle.css'

function App() {
  return (
    <div className="ContainerApp">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLoggin" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="PageAcess" element={<RequireAuth><PageAcess/></RequireAuth>} />
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
