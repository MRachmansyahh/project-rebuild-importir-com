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

const Section = () => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(user);
      } else {
        setIsLogin(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

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
          {isLogin ? "Seminar Member" : "Seminar Non Member"}
        </Text>

        <Box>
          {isLogin ? <SeminarMemberCards /> : <SeminarNonMemberCards />}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Section;
