import React, { createContext, useState } from 'react'

// Create context

export const CartContext = createContext();

const CartProvider = ({children}) => {
  
//Cart State
  const [cart, setCart] = useState([]);
  
//Add to Cart
  const addToCart = (product, id) => {
    const  newItem = { ...product, amount: 1 };
// Check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
//if cart item already in cart
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;  
}

export default CartProvider;