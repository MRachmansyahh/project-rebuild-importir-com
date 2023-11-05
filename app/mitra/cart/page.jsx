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
const MitraCart = () => {
  return (
    <Box bg={"white"} minH={"100vh"} borderRadius={"xl"} p={5}>
      <Flex
        p={6}
        boxShadow={"lg"}
        borderRadius={"lg"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text>Total Price</Text>
          <Heading>Rp. 0</Heading>
        </Box>
        <Button borderRadius={"lg"} bg={"green.600"}>
          <Text color={"white"}>Checkout</Text>
        </Button>
      </Flex>

      <Box>
        <Flex p={6}>
          <Flex justifyContent={"center"}>
            <Image
              src="/emptycart.png"
              alt="Logo"
              width={"30%"}
              alignItems={"center"}
            />
          </Flex>
        </Flex>

        <Box color={"gray.600"} textAlign={"center"} p={6}>
          <Heading>Whoa, your shopping cart is empty</Heading>
          <Text mt={4}>Let's fill it with your dream items!</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MitraCart;
