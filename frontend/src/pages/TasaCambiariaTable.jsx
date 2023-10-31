import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TasaCambiariaList() {
  const [tasas, setTasas] = useState([]);

  useEffect(() => {
    async function fetchTasas() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}tasacambiaria/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasas(data);
      } catch (error) {
        console.error('Error fetching Tasa Cambiaria data:', error);
      }
    }

    fetchTasas();
  }, []);

  return (
    <div>
      <h2 className="subtitulo">Tasa Cambiaria</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Código de Moneda</th>
            <th>Tasa de Cambio</th>
          </tr>
        </thead>
        <tbody>
          {tasas.map((tasa) => (
            <tr key={tasa.id}>
              <td>{tasa.codigo_moneda}</td>
              <td>{tasa.tasa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasaCambiariaList;
