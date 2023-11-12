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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { SearchWeb } from "./Header/Search";
import Authentication from "../Auth/AuthHeader";

export default function Header({ products, setFilteredProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <HStack>
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

          <Box w={"md"}>
            <SearchWeb
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Authentication />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
