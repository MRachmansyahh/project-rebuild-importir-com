import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const InvoicePage = () => {
  return (
    <Box p={6} minH={"100vh"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "20%" }}>
          <Text fontWeight={"bold"}>Invoice History List</Text>
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

      <Flex
        bg={"white"}
        mt={4}
        p={4}
        borderRadius={"lg"}
        justifyContent={"space-between"}
        gap={8}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex gap={8} flexDir={{ base: "column", md: "row" }}>
          <Box>
            <Text>Product Image</Text>
          </Box>
          <Box>
            <Text fontSize={"xs"}>Order Date</Text>
            <Text fontWeight={"bold"}>Invoice ID</Text>
            <Text fontSize={"xs"}>Lartas/Non Lartas</Text>
            <Text fontSize={"xs"}>Status: Paid/Unpaid</Text>
          </Box>
        </Flex>
        <Box>
          <Text mb={2} fontWeight={"bold"}>
            Total Price
          </Text>
          <Button h={7} bg={"green.300"} color={"white"}>
            <Link href={"/invoice/detail"}>Detail</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default InvoicePage;
