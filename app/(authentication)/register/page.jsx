"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  Checkbox,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"rgb(255, 214, 0)"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"xl"}
          p={8}
        >
          <Flex justifyContent={"center"} mb={6}>
            <Image src="/logo2.png" alt="Logo" p={4} />
          </Flex>

          <Stack>
            <Flex flexDir={{ base: "column", sm: "row" }} gap={2}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="text" w={"100%"} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" w={"100%"} />
              </FormControl>
            </Flex>
            <Flex flexDir={{ base: "column", sm: "row" }} gap={2}>
              <FormControl id="country" isRequired>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="1">Kongo</option>
                  <option value="1">India</option>
                  <option value="1">Nepal</option>
                </Select>
              </FormControl>

              <FormControl id="packakge" isRequired>
                <FormLabel>Packakge</FormLabel>
                <Select>
                  <option value="1">Gold 1 Tahun</option>
                  <option value="1">Gold 3 Tahun</option>
                </Select>
              </FormControl>
            </Flex>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"black"}
                color={"rgb(255, 214, 0)"}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Create Account
              </Button>
            </Stack>
            <Checkbox>
              I agree to the{" "}
              <span style={{ color: "red" }}>Term & Conditions</span>
            </Checkbox>
            <Stack pt={6}>
              <Flex>
                <Text me={2}>Already have an account?</Text>
                <Text fontWeight={"bold"} color={"rgb(255, 214, 0)"}>
                  <Link href="/login">Login</Link>
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
