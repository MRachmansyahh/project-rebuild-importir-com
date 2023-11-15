"use client";

import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { FiMail } from 'react-icons/fi';
import { MdOutlineSubscriptions, MdSmartphone } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { BiTimeFive } from 'react-icons/bi';
import { GetDocument, auth, db } from '@/service/firebaseApp';
import { doc, getDoc } from 'firebase/firestore';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  
  console.log("Data User:", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.email)
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUser( docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <Box minH={"100vh"}>
    <Grid templateColumns="repeat(3, 1fr)" gap={4} m={4}>
      <GridItem
        colSpan={{ base: 3, md: 1 }}
        bg={"white"}
        p={4}
        borderRadius={"lg"}
      >
        <Text fontWeight={"bold"} fontSize={"lg"}>
          Profile
        </Text>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            my={4}
          />
          <label htmlFor="file-upload">
            <Text
              fontSize={"sm"}
              color={"blue.500"}
              fontStyle={"italic"}
              cursor="pointer"
            >
              Change Avatar
            </Text>
          </label>
          <Input type="file" accept="image/*" id="file-upload" display="none" />
        </Flex>

        <Flex justifyContent={"space-between"} my={4} gap={2}>
          <Button flex={1} bg={"red.400"} h={7} color={"white"} fontSize={"xs"}>
            Promo Code
          </Button>
          <Link href={"/cbm"}>
          <Button
            flex={1}
            bg={"green.400"}
            h={7}
            color={"white"}
            fontSize={"xs"}
          >
            CBM Balance
          </Button>
          </Link>
          <Link href={"/refund"}>
          <Button
            flex={1}
            bg={"blue.400"}
            h={7}
            color={"white"}
            fontSize={"xs"}
          >
            Refund Balance
          </Button>
          </Link>
        </Flex>

        <Button bg={"green.400"} color={"white"} h={7} w={"100%"}>
          Terms and Conditions
        </Button>
      </GridItem>

      <GridItem
        colSpan={{ base: 3, md: 2 }}
        bg={"white"}
        p={4}
        borderRadius={"lg"}
      >
        <Tabs>
          <TabList>
            <Tab>View Profile</Tab>
            <Tab>Edit Profile</Tab>
            <Tab>Change Password</Tab>
            <Tab>Account Number</Tab>
          </TabList>
          <TabPanels>
            <TabPanel m={4} boxShadow={"lg"} p={8}>
              <Text fontWeight={"bold"}>{user?.fullname}</Text>
              <Box>
                <Flex alignItems={"center"} my={4}>
                  <FiMail me={4} fontSize={"2xl"}/>
                  {user?.email}
                </Flex>
                <Flex alignItems={"center"} my={4}>
                  <MdSmartphone me={4} fontSize={"2xl"} />
                  {user?.phonenumber}
                </Flex>
                <Flex alignItems={"center"} my={4}>
                  <AiOutlineIdcard me={4} fontSize={"2xl"} />
                  User ID
                </Flex>
                <Flex alignItems={"center"} my={4}>
                  <GrMapLocation me={4} fontSize={"2xl"} />
                  {user?.address}
                </Flex>
                <Flex alignItems={"center"} my={4}>
                  <BiTimeFive me={4} fontSize={"2xl"} />
                  User Updated
                </Flex>
                <Flex alignItems={"center"} my={4}>
                  <MdOutlineSubscriptions me={4} fontSize={"2xl"} />
                  {user?.package}
                </Flex>
              </Box>
            </TabPanel>

            <TabPanel m={4} boxShadow={"lg"} p={8}>
              <Box>
                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <Box w={"full"} my={2}>
                    <FormControl id="phonenumber" isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input type="number" />
                    </FormControl>
                  </Box>
                  <Box w={"full"} my={2}>
                    <FormControl id="name" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </Flex>

                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <Box w={"full"} my={2}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" isReadOnly />
                    </FormControl>
                  </Box>
                  <Box w={"full"} my={2}>
                    <FormControl id="city" isRequired>
                      <FormLabel>City/District</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </Flex>
                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <Box w={"full"} my={2}>
                    <FormControl id="birth" isRequired>
                      <FormLabel>Birth Date</FormLabel>
                      <Input type="date" />
                    </FormControl>
                  </Box>
                  <Box w={"full"} my={2}>
                    <FormControl id="job" isRequired>
                      <FormLabel>Job</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </Flex>
                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <Box w={"full"} my={2}>
                    <FormControl id="idnumber" isRequired>
                      <FormLabel>ID Number</FormLabel>
                      <Input type="number" isReadOnly />
                    </FormControl>
                  </Box>
                  <Box w={"full"} my={2}>
                    <FormControl id="npwp" isRequired>
                      <FormLabel>NPWP Number</FormLabel>
                      <Input type="number" />
                    </FormControl>
                  </Box>
                </Flex>
                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <Box w={"full"} my={2} justifySelf="flex-start">
                    <FormControl id="idphoto" isRequired>
                      <FormLabel>ID Image</FormLabel>
                      <Input type="file" border={"none"} />
                    </FormControl>
                  </Box>
                  <Box w={"full"} my={2} justifySelf="flex-start">
                    <FormControl id="npwp" isRequired>
                      <FormLabel>NPWP Image</FormLabel>
                      <Input type="file" border={"none"} />
                    </FormControl>
                  </Box>
                </Flex>
                <Box my={2}>
                  <FormControl id="address" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Button mt={4} bg={"green.400"} color={"white"} w={"100%"}>
                  Submit
                </Button>
              </Box>
            </TabPanel>

            <TabPanel m={4} boxShadow={"lg"} p={8}>
              <Box>
                <FormControl my={2} id="oldpassword" isRequired>
                  <FormLabel>Current Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <FormControl my={2} id="oldpassword" isRequired>
                    <FormLabel>New Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <FormControl my={2} id="oldpassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                </Flex>
                <Button my={4} bg={"green.400"} color={"white"} w={"100%"}>
                  Change Password
                </Button>
              </Box>
            </TabPanel>

            <TabPanel m={4} boxShadow={"lg"} p={8}>
              <Box>
                <FormControl my={2} id="accountname" isRequired>
                  <FormLabel>Account Name</FormLabel>
                  <Input type="text" />
                </FormControl>

                <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                  <FormControl my={2} id="accountnumber" isRequired>
                    <FormLabel>Account Number</FormLabel>
                    <Input type="number" />
                  </FormControl>

                  <FormControl my={2} id="bank" isRequired>
                    <FormLabel>Bank</FormLabel>
                    <Select>
                      <option value="option1">Bank 1</option>
                      <option value="option2">Bank 2</option>
                      <option value="option3">Bank 3</option>
                    </Select>
                  </FormControl>
                </Flex>

                <Button my={4} bg={"green.400"} color={"white"} w={"100%"}>
                  Submit
                </Button>

                <TableContainer my={12}>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Number</Th>
                        <Th>IS DEFAULT</Th>
                        <Th>NAME FROM INPUT</Th>
                        <Th>NAME FROM BANK</Th>
                        <Th>BANK</Th>
                        <Th>ACCOUNT NUMBER</Th>
                        <Th>STATUS</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>#</Td>
                        <Td>#</Td>
                        <Td>#</Td>
                        <Td>#</Td>
                        <Td>#</Td>
                        <Td>#</Td>
                        <Td>#</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
    </Box>
  );
};

export default ProfilePage;
