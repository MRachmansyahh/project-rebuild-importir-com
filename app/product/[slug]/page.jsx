"use client";

import ProductCarousel from "@/components/carousel/Carousel";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const DetailProduct = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} p={4}>
        <Box bg={"white"} borderRadius={"lg"}>
          <ProductCarousel />
        </Box>

        <Box>
          <Flex bg={"white"} p={4} borderRadius={"lg"}>
            <Box w={"90%"}>
              <Text fontWeight={"bold"}>Porduct Title</Text>
              <Text fontSize={"xs"} color={"gray.400"} py={2}>
                Supplier: Product Supplier
              </Text>
              <Flex
                justifyContent={"flex-start"}
                alignItems={"center"}
                py={2}
                gap={4}
                fontSize={"xs"}
              >
                <Text bg={"yellow"} p={1} borderRadius={"lg"}>
                  Lartas/Non Lartas
                </Text>
                <Text bg={"red"} p={1} borderRadius={"lg"}>
                  Country
                </Text>
                <Text bg={"orange"} p={1} borderRadius={"lg"}>
                  Code
                </Text>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
                py={2}
              >
                <Select h={7} fontSize={"xs"} w={"4xl"}>
                  <option value="option1">Shipping By</option>
                  <option value="option2">Air Rp. 180.000/kg</option>
                  <option value="option3">Sea Rp. 2.500.000/CBM</option>
                </Select>
                <Input placeholder="Weight Gram/pcs" h={7} fontSize={"xs"} />
                <Input placeholder="Volume CBM/pcs" h={7} fontSize={"xs"} />
              </Flex>
            </Box>
            <Flex w={"10%"} justifyContent={"center"} alignItems={"center"}>
              <Icon fontSize={"3xl"} as={FaRegHeart} />
            </Flex>
          </Flex>

          <Box bg={"white"} p={4} borderRadius={"lg"} my={4}>
            <Text fontWeight={"bold"}>Prices</Text>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      200 pcs
                    </Td>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      5000 pcs
                    </Td>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      50000 pcs
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      Price
                    </Td>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      Price
                    </Td>
                    <Td fontSize={"sm"} textAlign={"center"}>
                      Price
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <Box bg={"white"} p={4} borderRadius={"lg"}>
            <Text fontWeight={"bold"}>Product Info</Text>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td>Minimum Order</Td>
                    <Td>Minimum Number</Td>
                  </Tr>
                  <Tr>
                    <Td>Supplier Name</Td>
                    <Td>Name</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} p={4}>
        <Box>
          <Box bg={"white"} borderRadius={"lg"} p={4} mb={4}>
            <Text fontWeight={"bold"}>Firt Bill Estimation</Text>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td fontSize={"xs"}>Product Price x 0</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>Warehouse Delivery Fee</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>Handling Fee 3%</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>PPn Handling Fee</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr fontWeight={"bold"}>
                    <Td>Total</Td>
                    <Td>Rp. 0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box bg={"white"} borderRadius={"lg"} p={4}>
            <Text fontWeight={"bold"}>Second Bill Estimation</Text>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td fontSize={"xs"}>BM 15%</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>PPn 11%</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>PPh 2.5%</Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize={"xs"}>
                      Shipping fee China - Indonesia (1kg)
                    </Td>
                    <Td fontSize={"xs"}>Rp. 0</Td>
                  </Tr>
                  <Tr fontWeight={"bold"}>
                    <Td>Total</Td>
                    <Td>Rp. 0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box bg={"white"} borderRadius={"lg"} p={4}>
          <Box bg={"white"} p={4} borderRadius={"lg"} mt={4}>
            <Text fontWeight={"bold"}>Order</Text>
            <Flex h={"70px"}></Flex>
            <Divider />
            <Text fontSize={"sm"} fontWeight={"bold"} mt={2}>
              Product Name
            </Text>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={2}>
              <Box fontSize={"xs"}>
                <Text>PRODUCT NAME</Text>
                <Text>Product Price</Text>
              </Box>
              <Box fontSize={"xs"}>
                <Text textAlign={"center"}>Stock:</Text>
                <Flex gap={2}>
                  <Button h={6} bg={"rgb(255, 214, 0)"}>
                    -
                  </Button>
                  <Input h={6} w={8}></Input>
                  <Button h={6} bg={"rgb(255, 214, 0)"}>
                    +
                  </Button>
                </Flex>
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
              <Stack fontSize={"sm"}>
                <Text>Total Quantity: </Text>
                <Text>Total Price: </Text>
              </Stack>
              <Stack fontSize={"sm"}>
                <Text>Minimum Order 200</Text>
                <Button h={6} fontSize={"sm"} bg={"rgb(255, 214, 0)"}>
                  Add to cart
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
      <Box bg={"white"} p={4} borderRadius={"lg"} mx={4}>
        <Text fontWeight={"bold"}>Product Description</Text>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id
            harum aspernatur saepe sit reprehenderit culpa nesciunt tempore!
            Molestias id, rerum illum eius, quisquam officiis nam iure fuga
            dolor possimus aut adipisci est mollitia natus soluta repellendus
            perferendis. Quas saepe odit voluptates aliquid iure consequatur
            veritatis culpa eligendi repudiandae id.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailProduct;
