"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useCart } from "@/context/CartContext";
const CartPage = () => {
  const { cart } = useCart()
  return (
    <Box minH={"100vh"}>
      <Box bg={"white"} p={6}>
        <Text>Total Price</Text>
        <Heading>Rp. 0</Heading>
      </Box>

      <Button bg={"rgb(255, 214, 0)"} borderRadius={"full"} my={4}>
        <Icon as={ChevronLeftIcon} color={"black"} />
        <Text>Back</Text>
      </Button>

      <Box>
        {cart.map((product) => (
          <Box key={product.id}>
            <Text>{product.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartPage;
