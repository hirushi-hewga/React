import AuthProvider from './components/providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { store } from './store';
import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);