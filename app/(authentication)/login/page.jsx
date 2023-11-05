"use client";

import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Image,
  Icon,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { MdVpnKey } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../../../api/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleChangeText = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login berhasil
        const user = userCredential.user;
        console.log("Logged in Success:", user);
        router.push("/");

        toast({
          title: "Successfully logged in",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast({
          title: "Login Failed",
          description:
            errorCode === "auth/invalid-login-credentials"
              ? "Enter your email and password correctly"
              : errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        console.log("Error:", errorCode, errorMessage);

        if (errorCode === "auth/invalid-login-credentials") {
          setLoginFailed("Enter your email and password correctly");
        }
      });
  };

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
          bg={useColorModeValue("blackAlpha.400", "gray.700")}
          boxShadow={"lg"}
          p={8}
          alignItems={"center"}
        >
          <Flex justifyContent={"center"}>
            <Image src="/logo2.png" alt="Logo" p={4} />
          </Flex>
          <Stack spacing={4}>
            <FormControl id="email">
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={GrMail} fontSize={"lg"} />
                </InputLeftAddon>
                <Input
                  type="email"
                  placeholder="Email"
                  color={"black"}
                  bg={"white"}
                  onChange={handleChangeText} // Tambahkan onChange
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={MdVpnKey} fontSize={"lg"} />
                </InputLeftAddon>
                <Input
                  type="password"
                  placeholder="Password"
                  color={"black"}
                  bg={"white"}
                  onChange={handleChangeText}
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Box>
                <Text fontWeight="bold">
                  <Link href="/register">Forgot Password?</Link>
                </Text>
                <Flex justify={"space-between"} flexWrap={"wrap"} mt={2}>
                  <Text>Don't have an account?</Text>
                  <Text fontWeight="bold">
                    <Link href="/register">Register</Link>
                  </Text>
                </Flex>
              </Box>
              <Button
                bg={"black"}
                color={"rgb(255, 214, 0)"}
                _hover={{
                  bg: "gray.200",
                }}
                onClick={handleLogin}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
