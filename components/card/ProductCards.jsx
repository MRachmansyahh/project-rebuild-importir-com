"use client";

import {
  Flex,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Icon,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { products } from "@/constants";
import { FiShoppingCart } from "react-icons/fi";
import { formatRupiah } from "@/constants";
import Link from "next/link";

const ProductCards = () => {
  const [displayCount, setDisplayCount] = useState(5); // Display first 5 products
  const productsToDisplay = products.slice(0, displayCount);
  const showAll = displayCount >= products.length;

  const handleLoadMore = () => {
    setDisplayCount(showAll ? 5 : displayCount + 5); // Toggle between showing 5 or adding 5 more products
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={4}>
        {productsToDisplay.map((product) => (
          <Card key={product.id} maxW={"2xs"} boxShadow={"xl"}>
            <Image src={product.image} borderTopRadius={"lg"} />
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
              <Link href={"/product/[slug]?slug=1"}>
                <Button variant="solid" colorScheme="green" w={"100%"}>
                  <Icon as={FiShoppingCart} me={4} />
                  Order Now
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      {products.length > 5 && (
        <Flex justify="center" mt={4}>
          <Button onClick={handleLoadMore} bg="rgba(255, 214, 0)" h={7}>
            {showAll ? "Show Less" : "Load More"}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ProductCards;
