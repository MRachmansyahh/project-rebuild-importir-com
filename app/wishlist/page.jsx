"use client";

import OrderNow from "@/components/button/OrderNow";
import ProductCards from "@/components/card/ProductCards";
import { formatRupiah } from "@/constants";
import { useWishlist } from "@/context/WishlistContext";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const WhishlistPage = () => {
  const { wishlist } = useWishlist();
  console.log("INI PRODUK DI WISHLIST", wishlist);
  return (
    <Box p={4} h={"100vh"}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Wishlist</Text>
        <Button bg="rgb(255, 214, 0)" fontSize={"sm"} h={7}>
          History Wishlist
        </Button>
      </Flex>

      <Box>
        <ProductCards products={wishlist} />
      </Box>
      

    </Box>
  );
};

export default WhishlistPage;
