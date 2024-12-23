import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure App.js is being imported correctly


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches your HTML structure
);
