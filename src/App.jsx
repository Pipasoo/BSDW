import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Registro from './pages/Registro';
import Inicio from './pages/Inicio';
import Boletas from './pages/Boletas'
import Perfil from './pages/Perfil'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
        <Route path="/inicio" element={<Inicio/>}></Route>
        <Route path="/boletas" element={<Boletas/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
      </Routes>

    </>
  );
}

export default App
