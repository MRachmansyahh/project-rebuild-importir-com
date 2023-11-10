import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/CartContext";

export default function ProductLayout({ children }) {
  return (
    <section>
      <ChakraProvider>
        <CartProvider>
            {children}
        </CartProvider>
      </ChakraProvider>
    </section>
  );
}
