import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CosContextProvider from './store/CosContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CosContextProvider>
    <App />
  </CosContextProvider>,
);