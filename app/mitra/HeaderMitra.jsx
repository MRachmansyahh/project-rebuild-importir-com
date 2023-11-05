"use client";

import { Box, Divider, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { PiListBold, PiShoppingCartSimpleFill } from "react-icons/pi";

const HeaderMitra = () => {
  return (
    <Box>
      <Box bg={"rgba(255, 214, 0)"}>
        <Text textAlign={"center"} p={4}>
          {" "}
          Welcome to{" "}
          <Text as="span" fontWeight="bold">
            IMPORTIR MITRA
          </Text>{" "}
          store 1000+ new products trending 2023
        </Text>
      </Box>
      <Box bg={"black"}>
        <Heading textAlign={"center"} color={"rgb(255, 214, 0)"} py={4}>
          MITRA IMPORTIR
        </Heading>
        <Divider />
        <Flex
          color={"white"}
          py={4}
          gap={4}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Link href={"/mitra/"}>
            <Icon as={ImHome} mx={2} />
            Dashboard
          </Link>
          <Link href={"/mitra/order/list"}>
            <Icon as={PiListBold} color={"white"} mx={2} />
            History Order
          </Link>
          <Link href={"/mitra/cart"}>
            {" "}
            <Icon as={PiShoppingCartSimpleFill} mx={2} />
            Cart
          </Link>
          <Link href={"/mitra/wishlist"}>
            <Icon as={FaHeart} mx={2} />
            Wishlist
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderMitra;
