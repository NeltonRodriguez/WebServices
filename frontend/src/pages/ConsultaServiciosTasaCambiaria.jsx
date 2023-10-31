import React, { useState } from 'react';

function ConsultaServiciosTasaCambiaria() {
  const [consultas, setConsultas] = useState([]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const filtrarConsultas = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/consultaservicio/?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setConsultas(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
        Hello!
    </div>
  );
}

export default ConsultaServiciosTasaCambiaria;
