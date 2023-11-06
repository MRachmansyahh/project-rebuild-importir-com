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
const CartPage = () => {
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

      <Flex justifyContent={"center"} my={4}>
        <Image
          src="/emptycart.png"
          alt="Logo"
          width={"30%"}
          alignItems={"center"}
        />
      </Flex>

      <Box color={"gray.600"} textAlign={"center"} p={6} my={4}>
        <Heading>Whoa, your shopping cart is empty</Heading>
        <Text mt={4}>Let is fill it with your dream items!</Text>
      </Box>
    </Box>
  );
};

export default CartPage;
