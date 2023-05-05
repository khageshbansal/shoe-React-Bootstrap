import React from 'react';
import AddProduct from './components/AddProduct';

import ShowProduct from './components/ShowProduct';
import Cart from './components/Cart';
import { ContextProvider } from './components/ProductsContext';
export default function App() {
  return (
  
      <ContextProvider>
        <Cart />
        <AddProduct />
        <ShowProduct />
      </ContextProvider>
    
  );
}
