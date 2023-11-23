"use client";

import React, { createContext, useContext, useReducer } from "react";

// Membuat context untuk CartContext
const CartContext = createContext();

// Reducer untuk mengelola state cart
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};

// Komponen provider untuk CartContext
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Fungsi untuk menambahkan item ke dalam cart
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  }

  // Menyediakan nilai context kepada komponen-komponen di dalamnya
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk menggunakan CartContext di dalam komponen
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("ERROR BROK");
  }
  return context;
};

export { CartProvider, useCart, CartContext };
