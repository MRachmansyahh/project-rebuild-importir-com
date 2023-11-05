"use client";

import {
  Avatar,
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import SectionCards from "../card/SectionCards";
import { seminars } from "@/constants";
import Link from "next/link";

const Section = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} padding={4}>
      <Box bg="white" borderRadius={"xl"} boxShadow={"xl"}>
        <Flex
          justifyContent={"space-between"}
          marginBottom={2}
          fontSize={"md"}
          fontWeight={"bold"}
          p={4}
          pb={0}
        >
          <Text>Business Importir</Text>
          <Link href="/login" color={"blue.500"} fontStyle={"italic"}>
            see all
          </Link>
        </Flex>
        <Divider />
        <SectionCards />
      </Box>

      <Box bg="white" p={4} borderRadius={"xl"} boxShadow={"xl"}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Seminar for non-member
        </Text>

        <Box>
          {seminars.map((seminar) => (
            <Box key={seminar.city}>
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                my={4}
                flexDir={{ base: "column", sm: "row" }}
              >
                <Avatar name={seminar.place} src={seminar.image} />

                <Flex
                  flexDir="column"
                  alignItems={{ base: "center", sm: "flex-start" }}
                  flex="1"
                  m={4}
                >
                  <Text>
                    {seminar.city}{" "}
                    <span
                      style={{
                        backgroundColor: "#FF8080",
                        borderRadius: "4px",
                        padding: "2px",
                      }}
                    >
                      {seminar.place}
                    </span>
                  </Text>
                  <Text>{seminar.date}</Text>
                </Flex>

                <Button colorScheme="green">Register now</Button>
              </Flex>
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Section;
