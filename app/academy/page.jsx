import {
  Button,
  SimpleGrid,
  Text,
  Box,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

const AcademyPage = () => {
  return (
    <Box mt={8} p={6} minH={"100vh"}>
      <Heading color="rgb(255, 214, 0)">Start Learning Today</Heading>
      <Text fontSize={"lg"} fontWeight={"bold"}>
        Find a class that suits your needs
      </Text>

      <Flex justifyContent={"flex-end"} mb={4}>
        <Link href="#">
          <Button colorScheme="blue">Other Video</Button>
        </Link>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Box
          bg="rgb(108, 221, 255)"
          p={4}
          borderRadius={"2xl"}
          boxShadow={"lg"}
        >
          <Flex justifyContent={"space-between"} mb={10}>
            <Box>
              <Heading fontSize={"5xl"}>No product yet.</Heading>
              <Text mt={4} fontSize={"xl"}>
                Beginer Class
              </Text>
            </Box>

            <Flex justifyContent={"center"} alignItems={"center"}>
              <Image
                src="https://stage.importir.com/images/new-academy/empty-box.png"
                alt="Logo"
                w={"60%"}
              />
            </Flex>
          </Flex>
          <Link href="#">
            <Button borderRadius={"full"}>Learn Now</Button>
          </Link>
        </Box>

        <Box bg="rgb(255, 214, 0)" p={4} borderRadius={"2xl"} boxShadow={"lg"}>
          <Flex justifyContent={"space-between"} mb={10}>
            <Box>
              <Heading fontSize={"5xl"}>Already have a product.</Heading>
              <Text mt={4} fontSize={"xl"}>
                Advance Class
              </Text>
            </Box>

            <Flex justifyContent={"center"} alignItems={"center"}>
              <Image
                src="https://stage.importir.com/images/new-academy/giveaway.png"
                alt="Logo"
                w={"60%"}
              />
            </Flex>
          </Flex>
          <Link href="#">
            <Button borderRadius={"full"}>Learn Now</Button>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AcademyPage;
