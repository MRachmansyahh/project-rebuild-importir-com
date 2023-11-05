import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const OrderPage = () => {
  return (
    <Box p={6} minH={"100vh"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "20%" }}>
          <Text fontWeight={"bold"}>Order History List</Text>
        </Box>

        <Flex
          w={{ base: "100%", md: "80%" }}
          gap={2}
          flexDir={{ base: "column", md: "row" }}
        >
          <Input placeholder="Invoice Number" h={8} fontSize={"sm"} />
          <Input placeholder="Title" h={8} fontSize={"sm"} />
          <Select h={8} fontSize={"sm"}>
            <option value="option1">All</option>
            <option value="option2">Sea Route</option>
            <option value="option3">Air Route</option>
          </Select>
          <Input type="date" h={8} fontSize={"sm"} />
          <Input type="date" h={8} fontSize={"sm"} />
          <Button
            h={8}
            w={{ base: "auto", md: "md" }}
            bg={"rgb(255, 214, 0)"}
            fontSize={"sm"}
          >
            Search
          </Button>
          <Button
            h={8}
            w={{ base: "auto", md: "md" }}
            bg={"rgb(255, 214, 0)"}
            fontSize={"sm"}
          >
            Reset
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box
          bg={"white"}
          p={4}
          borderRadius={"lg"}
          boxShadow={"lg"}
          my={4}
          w={{ base: "100%", md: "50%" }}
        >
          <Text fontSize={"xs"}>Order Date</Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <Box>Product Image</Box>

            <Box>
              <Text fontWeight={"bold"}>Product Title</Text>
              <Text fontSize={"xs"}>Product Description</Text>
              <Flex fontSize={"xs"} gap={2}>
                <Text>Badge Country</Text>
                <Text>Shipping Route</Text>
              </Flex>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Estimated Total Purchase</Text>
              <Text fontSize={"xs"} color={"red"}>
                Total Purchase Include Tax and Others
              </Text>
              <Button bg={"green.300"} color={"white"} h={7}>
                Detail
              </Button>
            </Box>
          </SimpleGrid>
          <Divider my={4} />

          <Box>
            <Flex fontSize={"xs"} justifyContent={"space-between"} my={1}>
              <Text>Product ID</Text>
              <Text>ID Number</Text>
            </Flex>
            <Flex fontSize={"xs"} justifyContent={"space-between"} my={1}>
              <Text>Status</Text>
              <Text>Paid/Unpaid</Text>
            </Flex>
            <Flex fontSize={"xs"} justifyContent={"space-between"} my={1}>
              <Text>Quantity</Text>
              <Text>Qty Number</Text>
            </Flex>
            <Flex
              fontWeight={"bold"}
              fontSize={"xs"}
              justifyContent={"space-between"}
              my={1}
            >
              <Text>Price</Text>
              <Text>Rp. Number</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrderPage;
