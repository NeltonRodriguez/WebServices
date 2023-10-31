import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HistorialCrediticioList() {
  const [historiales, setHistoriales] = useState([]);

  useEffect(() => {
    async function fetchHistoriales() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}historialcrediticio/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHistoriales(data);
      } catch (error) {
        console.error('Error fetching Historial Crediticio data:', error);
      }
    }

    fetchHistoriales();
  }, []);

  return (
    <div>
      <h2 className="subtitulo">Historial Crediticio</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Cliente Cédula</th>
            <th>Nombre Cliente</th>
            <th>RNC Empresa Adeuda</th>
            <th>Concepto Deuda</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {historiales.map((historial) => (
            <tr key={historial.id}>
              <td>{historial.cliente_cedula}</td>
              <td>{historial.nombre_propietario}</td>
              <td>{historial.rnc_empresa_adeuda}</td>
              <td>{historial.concepto_deuda}</td>
              <td>{historial.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistorialCrediticioList;
