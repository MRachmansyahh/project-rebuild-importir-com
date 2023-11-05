"use client";

import {
  Input,
  Box,
  Button,
  Flex,
  InputLeftAddon,
  Select,
  TableContainer,
  Table,
  Tbody,
  Td,
  Tr,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ShippingPage = () => {
  return (
    <Box
      bg={"white"}
      p={4}
      borderRadius={"lg"}
      boxShadow={"lg"}
      my={4}
      minH={"100vh"}
    >
      <Flex justifyContent={"flex-end"} gap={2} my={2}>
        <Link href={"/shipping/create"}>
          <Button bg={"blue.300"} color={"white"}>
            Shipping
          </Button>
        </Link>
        <Link href={"/calculator"}>
          <Button bg={"green.300"} color={"white"}>
            Simulator
          </Button>
        </Link>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        gap={2}
        my={4}
        flexDir={{ base: "column", md: "row" }}
      >
        <InputGroup>
          <InputLeftAddon>
            <Icon as={FaRegHeart} />
          </InputLeftAddon>
          <Input type="number" borderLeftRadius={0} />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon>
            <Icon as={FaRegHeart} />
          </InputLeftAddon>
          <Select borderLeftRadius={0}>
            <option value="option1">ALL</option>
            <option value="option2">DEMO</option>
            <option value="option3">REAL</option>
          </Select>
        </InputGroup>

        <Button bg={"yellow.300"} w={"120px"}>
          Search
        </Button>
      </Flex>

      <Box my={4}>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Td fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                  SHIPPING NUMBER
                </Td>
                <Td fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                  TYPE
                </Td>
                <Td fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                  TOTAL
                </Td>
                <Td fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                  CURRENT STATUS
                </Td>
                <Td fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                  CREATED AT
                </Td>
              </Tr>
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
    </Box>
  );
};

export default ShippingPage;
