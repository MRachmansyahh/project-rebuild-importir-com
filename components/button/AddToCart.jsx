"use client";

import { Button, useToast } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart:", product);

    toast({
      title: "Added to Cart",
      description: "Product has been added to the cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      h={6}
      fontSize={"sm"}
      bg={"rgb(255, 214, 0)"}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
