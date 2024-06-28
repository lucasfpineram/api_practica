import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes estilos globales
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

