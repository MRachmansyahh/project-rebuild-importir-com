import { Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { formatRupiah } from "@/constants";
import OrderNow from "../button/OrderNow";
import LoadMoreButton from "../button/LoadMore";

const ProductCards = ({ products, count }) => {

  console.log(count);


  const displayedProducts = products.slice(0, count);
  console.log(displayedProducts);

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={4}>
        {displayedProducts.map((product) => (
          <Card key={product.product_id} maxW={"2xs"} boxShadow={"xl"}>
            <Image
              src={product.image}
              alt={product.title}
              borderTopRadius={"lg"}
            />
            <CardBody>
              <Box mb={4}>
                <Text fontSize={"sm"} fontWeight={"bold"} mb={2} isTruncated>
                  {product.title}
                </Text>
                <Text fontSize={"xs"}>Price</Text>
                <Text fontWeight={"bold"} fontSize="sm">
                  {formatRupiah(product.price)}
                </Text>
              </Box>
                <OrderNow link={`/product/${product.flag}/${product.product_id}`}/>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      {/* <LoadMoreButton /> */}
    </Box>
  );
};

export default ProductCards;
