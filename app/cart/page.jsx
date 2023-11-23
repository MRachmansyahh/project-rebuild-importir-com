"use client";

import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useCart } from "@/context/CartContext";
import { formatRupiah } from "@/constants";
import RemoveCart from "@/components/button/Remove";
const CartPage = () => {
  const { cart } = useCart();
  console.log("INI PRODUK DI CART", cart);

  const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
  };

  const calculateTotalCart = () => {
    let total = 0;
    cart.forEach((product) => {
      total += calculateTotalPrice(product);
    });
    return total;
  };

  return (
    <Box minH={"100vh"}>
      <Box bg={"white"} p={6}>
        <Text>Total Price</Text>
        <Heading>{formatRupiah(calculateTotalCart())}</Heading>
      </Box>

      <Button bg={"rgb(255, 214, 0)"} borderRadius={"full"} my={4}>
        <Icon as={ChevronLeftIcon} color={"black"} />
        <Text>Back</Text>
      </Button>

      <Box>
        {cart.map((product) => (
          <SimpleGrid
            key={product.id}
            columns={{ base: 1, md: 5 }}
            bg={"white"}
            p={6}
            spacing={4}
            borderRadius={"lg"}
            my={4}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Checkbox defaultChecked />
              <RemoveCart product_id={product.id} />
            </Flex>
            <Image src={product.image} alt={product.title} />
            <Box>
              <Flex gap={2} my={2}>
                <Badge bg={"red.300"}>Lartas/Non Lartas</Badge>
                <Badge bg={"red.300"}>Country</Badge>
                <Badge bg={"red.300"}>Air/Sea</Badge>
              </Flex>
              <Text my={2} fontWeight={"bold"}>
                {product.title}
              </Text>
              <Text my={2} fontSize={"sm"}>
                {formatRupiah(product.price)}
              </Text>
              <Text my={2} fontSize={"sm"}>
                Quantity:{" "}
              </Text>
            </Box>
            <Box></Box>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text my={2}>Total</Text>
              <Text my={2} fontSize={"lg"} fontWeight={"bold"}>
                {formatRupiah(calculateTotalPrice(product))}
              </Text>
            </Flex>
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
};

export default CartPage;
