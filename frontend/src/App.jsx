import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ConsultaServiciosTasaCambiaria from './pages/ConsultaServiciosTasaCambiaria';
import TasaCambiariaList from './pages/TasaCambiariaTable';
import IndiceInflacionList from './pages/IndiceInflacionTable';
import SaludFinancieraList from './pages/SaludFinancieraTable';
import HistorialCrediticioList from './pages/HistorialCrediticioTable';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1 className="main-title">Web Services Públicos</h1>
        <div className="menu">
          <Link to="http://localhost:5173" className="menu-link">
            Menu Inicio
          </Link>
          <Link to="/tasacambiaria" className="menu-link">
            Tasa Cambiaria
          </Link>
          <Link to="/indiceinflacion" className="menu-link">
            Indices de Inflacion
          </Link>
          <Link to="/saludfinanciera" className="menu-link">
            Salud Financiera
          </Link>
          <Link to="/historialcrediticio" className="menu-link">
            Historial Crediticio
          </Link>
        </div>
        <Routes>
          <Route path="*" element={<div> </div>} />
          <Route path="/tasacambiaria" element={<TasaCambiariaList />} />
          <Route path="/indiceinflacion" element={<IndiceInflacionList />} />
          <Route path="/saludfinanciera" element={<SaludFinancieraList />} />
          <Route path="/historialcrediticio" element={<HistorialCrediticioList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
