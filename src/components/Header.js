import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ajusta la ruta si es necesario

const Header = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/'); // Navega a la página principal (ajusta la ruta si es necesario)
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" onClick={handleLogoClick} />
      </div>
    </header>
  );
};

export default Header;
