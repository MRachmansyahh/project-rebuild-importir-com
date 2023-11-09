"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Select,
  Checkbox,
  Image,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SignUp,
  GetSignUpErrorMessage,
  GetTimestamp,
} from "@/service/firebaseApp";
import { SetDocument } from "@/service/firebaseApp";
import { useForm } from "react-hook-form";
``
export default function RegisterPage() {
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const {
      fullname,
      phonenumber,
      address,
      email,
      password,
      country,
      package: selectedPackage,
      createdAt: timestamp = GetTimestamp(),
    } = value;
    const phoneNumberAsNumber = parseInt(phonenumber, 10);
    try {
      SignUp(email, password);
      SetDocument(
        `users/${email}`,
        {
          fullname,
          phonenumber: phoneNumberAsNumber,
          address,
          email,
          country,
          package: selectedPackage,
          createdAt: timestamp,
        })
      router.push("/login");

      toast({
        title: "Successfully registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: GetSignUpErrorMessage(error.code),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"xl"}
          p={8}
        >
          <Flex justifyContent={"center"} mb={6}>
            <Image src="/logo2.png" alt="Logo" p={4} />
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <Flex flexDir={{ base: "column", sm: "row" }} gap={2}>
                <FormControl id="fullname" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" w={"100%"} {...register("fullname")} />
                </FormControl>

                <FormControl id="phonenumber" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="number" w={"100%"} {...register("phonenumber")} />
                </FormControl>
              </Flex>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" w={"100%"} {...register("address")} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" w={"100%"} {...register("email")} />
              </FormControl>
              <Flex flexDir={{ base: "column", sm: "row" }} gap={2}>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" w={"100%"} {...register("password")} minLength={8}/>
                </FormControl>

                <FormControl id="confirmpassword" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" w={"100%"} {...register("confirmpassword", { validate: (value) => value === watch("password") })} minLength={8}/>
                </FormControl>
              </Flex>
              <Flex flexDir={{ base: "column", sm: "row" }} gap={2}>
                <FormControl id="country" isRequired>
                  <FormLabel>Country</FormLabel>
                  <Select {...register("country")}>
                    <option value="Kongo">Kongo</option>
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                  </Select>
                </FormControl>

                <FormControl id="package" isRequired>
                  <FormLabel>Package</FormLabel>
                  <Select {...register("package")}>
                    <option value="Gold 1 Tahun">Gold 1 Tahun</option>
                    <option value="Gold 3 Tahun">Gold 3 Tahun</option>
                  </Select>
                </FormControl>
              </Flex>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
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
              <Checkbox isRequired>
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
