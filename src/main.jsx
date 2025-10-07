// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. Importa tus componentes de página y el layout principal
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import Services from './pages/Services.jsx';
import Privacity from './pages/Privacity.jsx';
import './index.css';

// 2. Define la estructura de tus rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App ahora es el "cascarón" o layout principal
    children: [
      {
        index: true, // Esto hace que HomePage sea la ruta por defecto de '/'
        element: <HomePage />,
      },
      {
        path: 'services', // La URL será tu-sitio.com/nueva-pagina
        element: <Services />,
      },
      {
        path: 'privacity',
        element: <Privacity />
      }
    ],
  },
]);

// 3. Renderiza el RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);