import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProductsListProvider } from './context';
import { UserProvider } from './context';
import { ScrollToTop } from './components';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ProductsListProvider>
        <UserProvider>
            <ToastContainer autoClose={3000} />
            <App />
        </UserProvider>
      </ProductsListProvider>
    </BrowserRouter>
  // </React.StrictMode>
);