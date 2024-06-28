import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/style_admin.css'; // Asumiendo que usa los mismos estilos que admin

const Detalle = () => {
  const history = useHistory();

  return (
    <main>
      <h1>Memoria Anual 2024</h1>
      <h3>Dirección de Sistemas</h3>
      <button className="back-button" onClick={() => history.push('/admin')}>Volver</button>
      <button className="pdf-button">Descargar PDF</button>

      <section>
        <sl-card className="card-header">
          <div slot="header">
            <strong>Objetivos 2024</strong>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </sl-card>
      </section>

      <section>
        <sl-card className="card-header">
          <div slot="header">
            <strong>Actividades 2024</strong>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </sl-card>
      </section>

      <section>
        <sl-card className="card-header">
          <div slot="header">
            <strong>Proyectos 2025</strong>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </sl-card>
      </section>
    </main>
  );
};

export default Detalle;
