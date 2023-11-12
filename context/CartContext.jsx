"use client";

import React, { createContext, useContext, useReducer } from "react";

// Membuat context untuk CartContext
const CartContext = createContext();

// Reducer untuk mengelola state cart
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    // Tambahkan case lain jika diperlukan

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

  // Menyediakan nilai context kepada komponen-komponen di dalamnya
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
