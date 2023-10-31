import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndiceInflacionList() {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    async function fetchIndices() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}indiceinflacion/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIndices(data);
      } catch (error) {
        console.error('Error fetching Indice Inflacion data:', error);
      }
    }

    fetchIndices();
  }, []);

  return (
    <div>
      <h2 className="subtitulo">Indice de Inflacion</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Período</th>
            <th>Índice (%)</th>
          </tr>
        </thead>
        <tbody>
          {indices.map((indice) => (
            <tr key={indice.id}>
              <td>{indice.periodo}</td>
              <td>{indice.indice}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IndiceInflacionList;
