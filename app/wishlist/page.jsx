"use client";

import OrderNow from "@/components/button/OrderNow";
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
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={4}>
          {wishlist.map((product) => (
            <Card key={product.id} maxW={"2xs"} boxShadow={"xl"}>
              <Image
                src={product.image}
                alt={product.title}
                borderTopRadius={"lg"}
              />
              <CardBody>
                <Box mb={4}>
                  <Text fontSize={"sm"} fontWeight={"bold"} mb={2}>
                    {product.title.length > 50
                      ? `${product.title.slice(0, 30)}...`
                      : product.title}
                  </Text>
                  <Text fontSize={"xs"}>Price</Text>
                  <Text fontWeight={"bold"} fontSize="sm">
                    {formatRupiah(product.price)}
                  </Text>
                </Box>
                <OrderNow />
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhishlistPage;
