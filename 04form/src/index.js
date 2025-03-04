import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import AuthProvider from './components/provoders/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);