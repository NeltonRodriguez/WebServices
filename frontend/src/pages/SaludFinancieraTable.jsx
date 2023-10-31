import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SaludFinancieraList() {
  const [saludFinanciera, setSaludFinanciera] = useState([]);

  useEffect(() => {
    async function fetchSaludFinanciera() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}saludfinanciera/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSaludFinanciera(data);
      } catch (error) {
        console.error('Error fetching Salud Financiera data:', error);
      }
    }

    fetchSaludFinanciera();
  }, []);

  return (
    <div>
      <h2 className="subtitulo">Salud Financiera</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Cliente Cédula</th>
            <th>Nombre Cliente</th>
            <th>Indicador</th>
            <th>Comentario</th>
            <th>Monto Total Adeudado</th>
          </tr>
        </thead>
        <tbody>
          {saludFinanciera.map((salud) => (
            <tr key={salud.id}>
              <td>{salud.cliente_cedula}</td>
              <td>{salud.nombre_cliente}</td>
              <td>{salud.indicador}</td>
              <td>{salud.comentario}</td>
              <td>{salud.monto_total_adeudado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SaludFinancieraList;
