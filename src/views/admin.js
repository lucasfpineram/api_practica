import React from 'react';
import '../assets/styles/style_admin.css';
import '../assets/scripts/script_admin.js'; // Asegúrate de que este script está exportando funciones necesarias

const Admin = () => {
  return (
    <main>
      <h1>Memoria Anual 2024</h1>
      <h3>Panel de administración</h3>
      <button className="new-area-button">Nueva área</button>
      <table>
        <thead>
          <tr>
            <th>Área</th>
            <th>Usuario</th>
            <th>Completo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dirección de Sistemas</td>
            <td>robyheymann@utdt.edu</td>
            <td>No</td>
            <td>
              <button className="view-button">Ver carga</button>
              <button className="edit-button">Editar</button>
              <button className="delete-button">Borrar</button>
            </td>
          </tr>
          <tr>
            <td>Dirección de Comunicaciones</td>
            <td>robyheymann@utdt.edu</td>
            <td>Si</td>
            <td>
              <button className="view-button">Ver carga</button>
              <button className="edit-button">Editar</button>
              <button className="delete-button">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Admin;
