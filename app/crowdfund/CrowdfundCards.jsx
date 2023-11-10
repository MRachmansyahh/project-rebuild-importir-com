"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { crowdfundCards } from "@/constants";
import { FiShoppingCart } from "react-icons/fi";
import { formatRupiah } from "@/constants";
import Countdown from "../../components/countdown/Countdown";

const CrowdfundCards = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt={4} gap={4}>
      {crowdfundCards.map((card) => (
        <Card key={card.id}>
          <Image src={card.image} alt="Logo" borderTopRadius={"xl"} />
          <CardBody>
            <Text
              bg={"rgb(255, 214, 0)"}
              p={1}
              borderRadius={"md"}
              display={"inline"}
              fontWeight={"bold"}
              my={1}
            >
              Ready from {card.country}
            </Text>
            <Text my={2} fontWeight={"bold"}>
              {card.title}
            </Text>
            <Text fontWeight={"bold"} my={2}>
              Will end on
            </Text>
            <Countdown my={1} />
            <Text mt={3} mb={0}>
              Price
            </Text>
            <Text fontWeight={"bold"}>{formatRupiah(card.price)}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="green" w={"100%"}>
              <Icon as={FiShoppingCart} me={4} />
              Order Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CrowdfundCards;
