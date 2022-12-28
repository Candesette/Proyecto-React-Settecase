import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css' ;

//el reactDOM con el createRoot crea una conexion con el DOM y la segunda libreria, eso queda en la variable root que renderiza el componente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
