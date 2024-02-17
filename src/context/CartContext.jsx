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

  // Remove From Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item =>{
      return item.id !== id;
    })
    setCart(newCart);
  };

// Clear cart
  const clearCart = () => {
    setCart([]);
};  

// increase amount
  const increaseAmount = (id) => {
    const item = cart.find(item => item.id ===id);
    addToCart(item, id);
};
  return <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, increaseAmount}}>{children}</CartContext.Provider>;  
}

export default CartProvider;