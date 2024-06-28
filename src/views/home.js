import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/style_home.css';

const Home = () => {
  const history = useHistory();

  return (
    <main>
      <div className="box" id="usuario">
        <h1>Memoria Anual 2024</h1>
        <h3>Ingresar como</h3>
        <button className="user-button" onClick={() => history.push('/user')}>Usuario</button>
        <button className="admin-button" onClick={() => history.push('/admin')}>Administrador</button>
      </div>
    </main>
  );
};

export default Home;




