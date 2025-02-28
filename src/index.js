// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 부분
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용

root.render(
  <Router>
    <App />
  </Router>
);
