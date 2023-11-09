import {
  Text,
  Button,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { formatRupiah } from "@/constants";
import Link from "next/link";
import { getProdukNatal } from "@/service/api";
import OrderNow from "../button/OrderNow";

const ChristmasCards = async () => {
  const { products, slug, info, detailProductIds } = await getProdukNatal();
  console.log(products);
  console.log(info)
  console.log(slug)
  console.log(detailProductIds)

  return (
    <Box p={4}>
       <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>{info}</Text>
        <Text mt={4}  fontSize={"xl"} fontWeight={"bold"}>{slug}</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={4}>
        {products.map((product) => (
          <Card key={product.product_id} maxW={"2xs"} boxShadow={"xl"}>
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
              <OrderNow/>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ChristmasCards;
