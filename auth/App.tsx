import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import PageAcess from "./pages/PageAcess";
import PageLoggin from "./pages/PageLoggin";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLoggin" element={<RequireAuth><PageAcess/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
