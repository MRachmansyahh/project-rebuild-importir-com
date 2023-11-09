import ProductCards from "@/components/card/ProductCards";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useWishlist } from "@/context/WishlistContext";

const whishlistPage = ({product}) => {
  const { wishlist } = useWishlist()
  return (
    <Box p={4} h={"100vh"}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Wishlist</Text>
        <Button bg="rgb(255, 214, 0)" fontSize={"sm"} h={7}>
          History Wishlist
        </Button>
      </Flex>

      <Box>
        {wishlist.map((product) => (
          <Box key={product.id}>
            <Text>{product.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default whishlistPage;
