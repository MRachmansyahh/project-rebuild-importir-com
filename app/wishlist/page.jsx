'use client'

import RemoveProduct from "@/components/button/Remove";
import ProductCards from "@/components/card/ProductCards";
import { useWishlist } from "@/context/WishlistContext";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
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
        <RemoveProduct product_id={wishlist.id} />
        <ProductCards products={wishlist} />
      </Box>
    </Box>
  );
};

export default WhishlistPage;
