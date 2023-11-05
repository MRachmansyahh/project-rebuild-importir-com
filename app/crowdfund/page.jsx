import CrowdfundCards from "@/components/card/CrowdfundCards";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CrowdfundPage = () => {
  return (
    <Box mt={10} p={6}>
      <Flex
        justifyContent={{ base: "flex-start", md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Crowdfund
          </Text>
        </Box>

        <Flex columnGap={4} rowGap={2} flexDir={{ base: "column", md: "row" }}>
          <Input
            type="text"
            placeholder="Product Name"
            bg={"white"}
            h={7}
            fontSize={"sm"}
          />
          <Select placeholder="Country" bg={"white"} h={7} fontSize={"sm"}>
            <option value="option2">Indonesia</option>
            <option value="option3">China</option>
          </Select>
          <Flex columnGap={4}>
            <Button bg="rgb(108, 221, 255)" h={7} fontSize={"sm"}>
              Search
            </Button>
            <Button bg="rgb(255, 214, 0)" h={7} fontSize={"sm"}>
              Reset
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Box bg={"blue.100"} p={4} borderRadius={"lg"} boxShadow={"md"} mt={4}>
        <Text fontWeight={"bold"}>Crowdfund Feature</Text>
        <Text>
          The crowdfund feature provides a variety of product options that you
          can use as references or list for your sales products without having
          to worry about HS Code, shipping fees, and taxes. The product prices
          within Crowdfund are the Final Price (HPP) until they reach the
          warehouse in Indonesia (excluding shipping costs to your address).
        </Text>
        <Text fontWeight={"bold"} mt={2}>
          There are (2) two types of Crowdfund Feature:
        </Text>
        <Text>
          1. From Indonesia: Products that are already in stock in Indonesia and
          ready to be shipped throughout Indonesia.
        </Text>
        <Text>
          2. From China: Products that need to be imported from China will take
          30-40 days to reach your address.
        </Text>
      </Box>

      <Box>
        <CrowdfundCards />
      </Box>
    </Box>
  );
};

export default CrowdfundPage;
