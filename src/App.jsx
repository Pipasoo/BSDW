import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Registro from './pages/Registro';
import Inicio from './pages/Inicio';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
        <Route path="/inicio" element={<Inicio/>}></Route>
      </Routes>

    </>
  );
}

export default App
