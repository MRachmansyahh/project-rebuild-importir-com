"use client";

import NewsCards from "@/components/card/NewsCards";
import Carousel from "@/components/carousel/Carousel";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { newsCardsPage } from "@/constants";

const NewsPage = () => {
  return (
    <Box bg={"white"} borderRadius={"xl"} boxShadow={"xl"} p={4} m={4}>
      <Text fontWeight={"bold"} fontSize={"xl"} my={4}>
        Latest new articles
      </Text>
      <Carousel />

      <InputGroup maxW={"xl"} mx={"auto"} my={4}>
        <Input
          type="search"
          placeholder="Search by title or description"
          color="black"
          bg="white"
          h={7}
        />
        <Button mx={2} h={7} bg={"rgba(255, 214, 0)"}>
          Search
        </Button>
      </InputGroup>

      <Box>
        <NewsCards layout={"horizontal"} />
      </Box>
    </Box>
  );
};

export default NewsPage;
