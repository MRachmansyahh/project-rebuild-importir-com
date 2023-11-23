"use client";

import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  Button,
  useDisclosure,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Authentication from "../Auth/AuthHeader";
import SearchProducts from "../Search/SearchProduct";
import { auth } from "@/service/firebaseApp";
import HeaderLogin from "./Header/HeaderLogin";
import HeaderLogout from "./Header/HeaderLogout";


const NavLink = ({children}) => {

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      fontWeight={"bold"}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

const Links = ['Dashboard', 'Projects', 'Team']

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = auth.currentUser
  const login = user ? <HeaderLogin /> : <HeaderLogout/>;

  return (
    <>
      <Box bg={"rgb(255, 214, 0)"} pt={2} px={4} boxShadow={"md"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack display={{ base: "none", sm: "flex" }}>
              <Link href="/">
                <Image src="/logo2.png" alt="Logo" />
              </Link>
            </HStack>

            <HStack spacing={8} alignItems={"center"}>
              <Link href={"/category"}>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  paddingBottom={0}
                  color={"black"}
                  bg={"none"}
                  _hover={{
                    bg: "white",
                  }}
                  size={["xs", "sm"]}
                >
                  <Icon as={BiCategory} w={5} h={5} marginEnd={2} />
                  Category
                </Button>
              </Link>
            </HStack>
          </Flex>

          <Box w={"md"} display={{ base: "none", md: "block" }}>
            <SearchProducts page="search"/>
          </Box>

          <Flex alignItems={"center"}>
            {login}
          </Flex>
        </Flex>
      </Box>

      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg={"rgb(255, 214, 0)"} p={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} >{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </>

  );
}
