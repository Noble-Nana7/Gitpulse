import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the use of 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for the React app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
