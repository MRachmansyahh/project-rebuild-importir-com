import {
  Box,
  TableContainer,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Table,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

const InvoiceDetailPage = () => {
  return (
    <Box p={4} my={4}>
      <Flex justifyContent={"space-between"}>
        <Button bg={"rgb(255, 214, 0)"}>Back</Button>
        <Button bg={"rgb(255, 214, 0)"}>Print Invoice</Button>
      </Flex>
      <TableContainer
        bg={"white"}
        mt={4}
        p={4}
        borderRadius={"lg"}
        boxShadow={"lg"}
      >
        <Text fontWeight={"bold"}>Product Order</Text>
        <Table variant="striped" colorScheme="gray" align="center">
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Invoice</Th>
              <Th textAlign={"center"}>Total Product</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textAlign={"center"}>Invoice ID</Td>
              <Td textAlign={"center"}>Total Price</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer
        bg={"white"}
        mt={4}
        p={4}
        borderRadius={"lg"}
        boxShadow={"lg"}
      >
        <Text fontWeight={"bold"}>Detail Order</Text>
        <Table variant="striped" colorScheme="gray" align="center">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Product Name</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>Warehouse Delivery Fee</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>Handling Fee 3%</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>PPn Habdling Fee</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>Bm 7.5%</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>PPn 11%</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>PPh 10%</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>Local Delivery Local</Td>
              <Td>Total Price</Td>
            </Tr>
            <Tr>
              <Td>Shipping Fee</Td>
              <Td>Total Price</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Text fontSize={"xs"} color={"red"} mt={2}>
        Thank you for your attention. The list displayed above reflects the
        comprehensive sum of all your placed orders. We appreciate your
        continued transactions with us.
      </Text>
      <Box bg={"white"} mt={4} p={4} borderRadius={"lg"} boxShadow={"lg"}>
        <Text fontWeight={"bold"}>Payment Method</Text>
        <Flex justifyContent={"center"} gap={4}>
          <Button bg={"green.300"}>Transfer</Button>
          <Button bg={"green.300"}>Credit Card</Button>
          <Button bg={"green.300"}>BCA</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default InvoiceDetailPage;
