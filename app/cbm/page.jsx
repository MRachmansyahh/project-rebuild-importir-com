"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const CbmPage = () => {
  return (
    <Box bg={"white"} minH={"100vh"} borderRadius={"xl"}>
      <Heading py={12} textAlign={"center"} color={"black"}>
        Your remaining CBM balance
      </Heading>
      <Divider />

      <Flex justifyContent={"center"} alignItems={"center"} gap={10} py={6}>
        <Box>
          <Heading textAlign={"center"}>0 CBM</Heading>
          <Text textAlign={"center"}>All Product</Text>
        </Box>
        <Box>
          <Heading textAlign={"center"}>0 CBM</Heading>
          <Text textAlign={"center"}>Selected Product</Text>
        </Box>
      </Flex>

      <Center mt={10}>
        <Button bg={"rgb(255, 214, 0)"} h={7}>
          <Text>Invoice Detail</Text>
          <Icon as={ArrowForwardIcon} />
        </Button>
      </Center>

      <TableContainer my={12}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Transaction Number</Th>
              <Th>CBM</Th>
              <Th>Type</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#</Td>
              <Td>#</Td>
              <Td>#</Td>
              <Td>#</Td>
              <Td>#</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CbmPage;
