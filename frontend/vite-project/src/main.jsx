// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './App';
import './index.css'; // Ensure Tailwind CSS is included
// import {RouterProvider} from 'react-router-dom'
// import router from './router/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
