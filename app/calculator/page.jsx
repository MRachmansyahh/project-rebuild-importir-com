import {
  Box,
  Button,
  HStack,
  Input,
  Select,
  SimpleGrid,
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

const CalculatorPage = () => {
  return (
    <Box minH={"100vh"}>
      <SimpleGrid p={4} spacing={2} columns={{ base: 1, md: 2 }}>
        <Box>
          <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
            <Text fontWeight="bold">Freight</Text>
            <Select>
              <option value="option1">Select Freight</option>
              <option value="option2">
                Air Freight 180rb/kg | EXW + Shipping to Warehouse
              </option>
              <option value="option3">
                Sea LCL min 0.2 CBM | EXW + Shipping to Warehouse
              </option>
              <option value="option4">FCL 20ft & 40ft by Quotation</option>
            </Select>
          </Box>

          <HStack bg="white" p={4} borderRadius="lg" boxShadow="md" my={2}>
            <Box w="50%">
              <Text fontSize={{ base: "xs", md: "md" }}>Lartas/Non Lartas</Text>
              <Select>
                <option value="option1">Select</option>
                <option value="option2">Lartas</option>
                <option value="option3">Non Lartas</option>
              </Select>
            </Box>
            <Box w={"50%"}>
              <Text fontSize={{ base: "xs", md: "md" }}>Handling Fee</Text>
              <Select>
                <option value="option1">Select</option>
                <option value="option2">3%</option>
                <option value="option3">5%</option>
                <option value="option4">7%</option>
                <option value="option5">10%</option>
              </Select>
            </Box>
          </HStack>

          <Box bg="white" p={4} borderRadius="lg" boxShadow="md" my={2}>
            <Text fontWeight={"bold"}>Estimate</Text>
            <HStack>
              <Box w={"50%"}>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Total Volume CBM (Estimate)
                </Text>
                <Input />
              </Box>
              <Box w={"50%"}>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Total Weight in Kg (Estimate)
                </Text>
                <Input />
              </Box>
            </HStack>
          </Box>

          <Box bg="white" p={4} borderRadius="lg" boxShadow="md" my={2}>
            <Text fontWeight={"bold"}>Product</Text>
            <HStack>
              <Box w={"50%"}>
                <Text fontSize={{ base: "xs", md: "md" }}>HS Code</Text>
                <Input />
              </Box>
              <Box w={"50%"}>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Product Price (RMB)
                </Text>
                <Input />
              </Box>
            </HStack>

            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td textAlign="left">BM 0%</Td>
                    <Td textAlign="right">0</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="left">PPn 0%</Td>
                    <Td textAlign="right">0</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="left">PPh 0%</Td>
                    <Td textAlign="right">0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <Box bg="white" p={4} borderRadius="lg" boxShadow="md" my={2}>
            <Text>Additional Fee</Text>
            <Input />
          </Box>

          <Button boxShadow="md" w="100%" bg="rgb(255, 214, 0)">
            Calculate
          </Button>
        </Box>

        <Box bg="white" p={4} borderRadius="lg" boxShadow="md" h={"100%"}>
          <Text fontWeight={"bold"}>Calculate Result</Text>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign="left">Product Price Total</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">Freight Fee</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">Handling Fee</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">PPn Handling Fee</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">BM</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">PPn</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">PPh</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">Additional Fee</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
                <Tr>
                  <Td textAlign="left">Total Bill</Td>
                  <Td textAlign="right">Rp. 0</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CalculatorPage;
