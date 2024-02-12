import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Product Provider
import ProductProvider from './context/ProductContext.jsx';
// Sidebar Provider
import SidebarProvider from './context/SidebarContext.jsx';
// Cart Provider
import CartProvider from './context/CartContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
