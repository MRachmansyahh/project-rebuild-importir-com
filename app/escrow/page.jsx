import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const EscrowPage = () => {
  return (
    <Box bg={"white"} minH={"100vh"} borderRadius={"xl"} p={4}>
      <Flex justifyContent={"space-between"} alignItems={"center"} p={6}>
        <Text fontWeight={"bold"}>Escrow</Text>
        <Button bg={"blue"} color={"white"}>
          Create
        </Button>
      </Flex>

      <TableContainer my={4}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ORDER ID</Th>
              <Th>AMOUNT RMB</Th>
              <Th>LAST STATUS</Th>
              <Th>#</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#</Td>
              <Td>#</Td>
              <Td>#</Td>
              <Td>#</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justifyContent="center">
        <Button bg={"rgb(255, 214, 0)"}>Load More</Button>
      </Flex>
    </Box>
  );
};

export default EscrowPage;
