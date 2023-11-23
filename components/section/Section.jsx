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
import React, { useEffect, useState } from "react";
import SectionCards from "../card/SectionCards";
import Link from "next/link";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../../service/firebaseApp";
import SeminarMemberCards from "../card/SeminarMemberCards ";
import SeminarNonMemberCards from "../card/SeminarNonMemberCards";
import AuthSeminar from "../Auth/AuthSeminar";

const Section = () => {
  const user = auth.currentUser;
  const login = user ? <SeminarMemberCards /> : <SeminarNonMemberCards />;


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
          {user ? "Seminar Member" : "Seminar Non Member"}
        </Text>

        <Box>
          {login}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Section;
