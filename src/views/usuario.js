import React from 'react';
import '../assets/styles/style_user.css';
import '../assets/scripts/script_user.js'; // Asegúrate de que este script está exportando funciones necesarias

const User = () => {
  return (
    <main>
      <h1>Memoria Anual 2024</h1>
      <h3>Dirección de Sistemas</h3>
      <div className="box" id="objetivosBox">
        <div className="box-content">
          <strong>Objetivos 2024</strong>
          <button className="view-button" onClick={() => showTextarea('objetivosBox')}>Agregar</button>
        </div>
        <div className="text-area-container">
          {/* El textarea de Shoelace se añade dinámicamente con JavaScript */}
        </div>
      </div>
      <div className="box" id="actividadesBox">
        <div className="box-content">
          <strong>Actividades 2024</strong>
          <button className="view-button" onClick={() => showTextarea('actividadesBox')}>Agregar</button>
        </div>
        <div className="text-area-container">
          {/* El textarea de Shoelace se añade dinámicamente con JavaScript */}
        </div>
      </div>
      <div className="box" id="proyectosBox">
        <div className="box-content">
          <strong>Proyectos 2025</strong>
          <button className="view-button" onClick={() => showTextarea('proyectosBox')}>Agregar</button>
        </div>
        <div className="text-area-container">
          {/* El textarea de Shoelace se añade dinámicamente con JavaScript */}
        </div>
      </div>
      <button className="confirm-button">Enviar a Secretaría Académica</button>
    </main>
  );
};

export default User;



