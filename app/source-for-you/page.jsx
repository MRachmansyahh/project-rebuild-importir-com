"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SourceForYouPage = () => {
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    // Lakukan sesuatu dengan selectedFile, seperti menyimpannya di state komponen atau melakukan pengolahan lainnya.
  };

  const handleUpload = () => {
    // Lakukan unggahan file ke server atau tindakan lainnya.
  };

  return (
    <Box minH={"100vh"} p={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        <Box bg={"white"} p={4} borderRadius={"lg"}>
          <Flex alignItems={"center"}>
            <Icon as={BsSearch} />
            <Text mx={2} fontWeight={"bold"}>
              Source For You
            </Text>
          </Flex>

          <Stack>
            <Text fontSize={"sm"} my={1}>
              Source For You adalah fitur yang akan membantu member IMPORTIR ORG
              / IMPORTIR COM untuk mendapatkan produk yang diinginkan dan
              menentukan Harga Pokok Penjualan dengan cara semudah mungkin.
            </Text>
            <Text fontSize={"sm"} my={1}>
              Sudah tahu apa itu SFY? Bingung menentukan jenis produk dan
              perhitungan HPP-nya ? Admin kami akan menemukannya untuk Anda !
            </Text>
            <Text fontSize={"xs"} color={"blue"} fontStyle={"italic"} my={1}>
              Isi formulir di bawah ini untuk menemukan barang impian Anda
            </Text>
          </Stack>

          <Stack>
            <FormControl>
              <FormLabel fontSize={"sm"}>Product name</FormLabel>
              <Input id="name" type="text" placeholder="Ex: Tumblr" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}>Product description</FormLabel>
              <Textarea
                id="description"
                type="text"
                placeholder="Detailed description of the items you desire"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}>Product link</FormLabel>
              <Input
                id="link"
                type="text"
                placeholder="Ex: https://www.tumblr.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}>Estimated Price</FormLabel>
              <Input id="price" type="number" placeholder="Ex: 30000" />
            </FormControl>
          </Stack>

          <Stack my={2}>
            <Text fontSize={"xs"}>Add Image or Video</Text>
            <Input type="file" onChange={handleFileSelect} border={"none"} />
            <Button onClick={handleUpload} bg={"rgb(255, 214, 0)"}>
              Submit
            </Button>
          </Stack>
        </Box>

        <Box bg={"white"} p={4} borderRadius={"lg"}>
          <Text fontWeight={"bold"}>List Source For You</Text>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h={"300px"}
            overflowY={"auto"}
          >
            <Text color={"gray.400"}>Source for you list unavailable</Text>
          </Flex>
          <Flex justifyContent={"center"}>
            <Button bg={"rgb(255, 214, 0)"}>Load More</Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SourceForYouPage;
