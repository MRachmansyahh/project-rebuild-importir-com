import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const MitraOrderList = () => {
  return (
    <Box bg={"white"} minH={"100vh"} borderRadius={"xl"} p={5}>
      <TableContainer my={12} mx={10}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th textAlign={"center"}>INVOICE</Th>
              <Th textAlign={"center"}>ITEM</Th>
              <Th textAlign={"center"}>PRICE</Th>
              <Th textAlign={"center"}>PAID AT</Th>
              <Th textAlign={"center"}>CHECKOUT AT</Th>
              <Th textAlign={"center"}>DETAIL</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#</Td>
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

export default MitraOrderList;
