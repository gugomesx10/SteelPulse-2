
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento root não encontrado.');
}

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
