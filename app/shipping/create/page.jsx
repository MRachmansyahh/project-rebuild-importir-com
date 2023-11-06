import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const CreatePage = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} p={4}>
      <Box overflowY={"auto"} h={"100vh"}>
        <Box bg={"white"} p={4} borderRadius={"lg"} my={4}>
          <Box>
            <Flex justifyContent={"space-between"} mb={2}>
              <Text fontWeight={"bold"}>Freight</Text>
              <Button bg={"blue.500"} color={"white"}>
                Change Mode
              </Button>
            </Flex>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Shipping Type</FormLabel>
              <Select required>
                <option value="option1">Select</option>
                <option value="option1">Lartas</option>
                <option value="option1">Non Lartas</option>
              </Select>
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Freight</FormLabel>
              <Select required>
                <option value="option1">Select</option>
                <option value="option1">
                  Air 180rb/kg | EXW +Shipping to Warehouse
                </option>
                <option value="option1">
                  Sea LCL min 0.2 CBM | EXW +Shipping to Warehouse
                </option>{" "}
                <option value="option1">FCL 20ft & 40ft by Quotation</option>{" "}
                <option value="option1">Lartas +Shipping to Warehouse</option>
                <option value="option1">
                  FCL 20ft & 40ft by Quotation
                </option>{" "}
                <option value="option1">FCL 20ft & 40ft by Quotation</option>{" "}
                <option value="option1">Lartas +Shipping to Warehouse</option>
              </Select>
            </FormControl>
            <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>
                  Volume Estimation (in CBM, ex:0,2)
                </FormLabel>
                <Input type="number" required />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Weight Estimation (in Kg)</FormLabel>
                <Input type="number" required />
              </FormControl>
            </Flex>
          </Box>
          <Box my={2}>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="green" defaultChecked>
                <Text>Wooden Packing</Text>
              </Checkbox>
            </Stack>
            <Text my={2} color={"red"} fontSize={"xs"} fontStyle={"italic"}>
              If you click YES, you agree for additional fee for wooden frame
              130RMB/box and when you click YES it can not be cancelled. If you
              agree, please proceed by clicking
            </Text>
          </Box>
          <Text
            textAlign={"center"}
            fontSize={"xs"}
            bg={"red"}
            borderRadius={"full"}
            color={"white"}
          >
            We are not responsible for any damage without wooden packing.
          </Text>
        </Box>

        <Box bg={"white"} p={4} borderRadius={"lg"}>
          <Text fontWeight={"bold"}>Product & Cost Information</Text>
          <Flex justifyContent={"space-between"} my={2} alignItems={"center"}>
            <Text>Product Number</Text>
            <Button bg={"red.500"} color={"white"}>
              Delete
            </Button>
          </Flex>
          <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Product Name (English)</FormLabel>
              <Input type="text" required />
            </FormControl>
            <FormControl mb={2} isRequired>
              <FormLabel fontSize={"sm"}>HS Code</FormLabel>
              <Input type="number" required />
            </FormControl>
          </Flex>
          <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel my={2} fontSize={"sm"}>
                Product Price Total (RMB)
              </FormLabel>
              <Input type="number" required />
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Product Quantity</FormLabel>
              <Input type="number" required />
            </FormControl>
          </Flex>
          <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Does the item contain?</FormLabel>
              <Flex spacing={5} direction="row" flexDir={"column"}>
                <Checkbox colorScheme="green" fontSize={"sm"} defaultChecked>
                  Battery
                </Checkbox>
                <Checkbox colorScheme="green" fontSize={"sm"} defaultChecked>
                  Liquid
                </Checkbox>
                <Checkbox colorScheme="green" fontSize={"sm"} defaultChecked>
                  MSDS (Material Safety Data Sheet)
                </Checkbox>
              </Flex>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>Product Image</FormLabel>
              <Input type="file" border={"none"} required />
            </FormControl>
          </Flex>
        </Box>
        <Button my={4} bg={"blue.500"} w={"full"} color={"white"}>
          Add Product
        </Button>

        <Box bg={"white"} p={4} borderRadius={"lg"} my={4}>
          <Text my={2} fontWeight={"bold"}>
            Additional Fee (RMB)
          </Text>
          <Input type="number" />
        </Box>

        <Box>
          <Box bg={"white"} p={4} borderRadius={"lg"} my={2}>
            <Text fontWeight={"bold"}>Invoice & Packing List</Text>
            <Flex gap={2} my={2} flexDir={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Supplier Email</FormLabel>
                <Input type="number" required />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Supplier Phone</FormLabel>
                <Input type="number" required />
              </FormControl>
            </Flex>
            <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Supplier Wechat ID</FormLabel>
                <Input type="text" required />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Commercial Invoice File</FormLabel>
                <Input type="file" border={"none"} required />
                <FormLabel fontSize={"xs"}>Maksimum 2MB</FormLabel>
              </FormControl>
            </Flex>
            <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Packing List File</FormLabel>
                <Input type="file" border={"none"} required />
                <FormLabel fontSize={"xs"}>Maksimum 2MB</FormLabel>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"}>Commercial Invoice File</FormLabel>
                <Input type="file" border={"none"} required />
                <FormLabel fontSize={"xs"}>Maksimum 2MB</FormLabel>
              </FormControl>
            </Flex>
          </Box>
          <Box bg={"white"} p={4} borderRadius={"lg"} my={2}>
            <Box>
              <Text fontWeight={"bold"} mb={2}>
                Customer Address
              </Text>
            </Box>
            <Flex gap={2}>
              <Button w={"full"} color={"white"} bg={"green.500"}>
                Add Address
              </Button>
              <Button w={"full"} color={"white"} bg={"red.500"}>
                Change Address
              </Button>
            </Flex>
          </Box>
          <Box>
            <Box bg={"white"} p={4} borderRadius={"lg"} my={2}>
              <Text fontWeight={"bold"} mb={2}>
                Others
              </Text>
              <Select>
                <option value="option1">Select</option>
                <option value="option1">Si Cepat</option>
                <option value="option1">JNE</option>
              </Select>
              <FormControl my={2}>
                <FormLabel fontSize={"sm"}>Note to Admin</FormLabel>
                <Textarea
                  type="text"
                  placeholder="SILAHKAN TULIS NAMA DAN ALAMAT EKPEDISI ANDA JIKA INGIN DIKIRIMKAN MELALUI EKSPEDISI :"
                />
              </FormControl>
            </Box>
          </Box>
          <Box bg={"white"} p={4} borderRadius={"lg"} my={2}>
            <Box>
              <Text fontWeight={"bold"}>Promo</Text>
              <Text mb={2} fontSize={"sm"}>
                Promo code can not be used with CBM Balance
              </Text>
              <Button fontSize={"sm"} bg={"green.500"} color={"white"}>
                Apply Promo
              </Button>
            </Box>
          </Box>
          <Box bg={"white"} p={4} borderRadius={"lg"} my={2}>
            <Text>Used CBM Balance</Text>
            <Box>
              <Button bg={"green.500"} color={"white"}>
                Used CBM Balance
              </Button>
            </Box>
          </Box>
          <Button bg={"blue.500"} color={"white"} w={"full"} mt={4}>
            Save
          </Button>
        </Box>
      </Box>

      <Box bg={"white"} p={4} borderRadius={"lg"} h={"100vh"}>
        <Text fontWeight={"bold"} mb={4}>
          Summary
        </Text>
        <Flex justifyContent={"space-between"}>
          <Text>Rate</Text>
          <Text>Rp.</Text>
        </Flex>
        <Divider />
        <Text fontWeight={"bold"} my={4}>
          Product List
        </Text>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text>X</Text>
          <Text>¥0</Text>
          <Text>Rp. 0</Text>
        </Flex>
        <Divider />
        <Text fontWeight={"bold"} my={4}>
          Bill Estimation
        </Text>
        <TableContainer>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td>Total Product Price</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Shipping Fee to Indonesia</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Delivery Fee Local</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Handling Fee</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>PPn Handling Fee</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Bm</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>PPn</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>PPh</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Adding Fee</Td>
                <Td>Rp. 0</Td>
              </Tr>
              <Tr>
                <Td>Total Fee</Td>
                <Td>Rp. 0</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </SimpleGrid>
  );
};

export default CreatePage;
