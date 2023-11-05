"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  LinkBox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ImHome } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { PiListBold } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { AiFillMinusCircle } from "react-icons/ai";
const MitraPage = () => {
  return (
    <Box boxShadow={"lg"} borderRadius={"lg"}>
      <Box>Video</Box>
      <Text textAlign={"center"} p={4} fontSize={"3xl"}>
        BENEFIT OF BEING AN IMPORTIR PARTNER
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={4}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          border={"1px"}
          borderColor={"gray.300"}
          p={4}
          gap={8}
          borderRadius={"lg"}
        >
          <Icon as={AiFillMinusCircle} boxSize={10} />
          <Box>
            <Text as={"span"} fontWeight={"bold"}>
              No selling skills required
            </Text>
            <Text>
              Because all the items you choose, we will sell them for you.
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          border={"1px"}
          borderColor={"gray.300"}
          p={4}
          gap={8}
          borderRadius={"lg"}
        >
          <Icon as={BsShop} boxSize={10} />
          <Box>
            <Text as={"span"} fontWeight={"bold"}>
              {" "}
              Wide Selection of Goods
            </Text>
            <Text>
              The large selection of goods allows you to choose the one that
              suits your needs and desires.
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          border={"1px"}
          borderColor={"gray.300"}
          p={4}
          gap={8}
          borderRadius={"lg"}
        >
          <Icon as={BiMoney} boxSize={10} />
          <Box>
            <Text as={"span"} fontWeight={"bold"}>
              Profit Sharing
            </Text>
            <Text>
              With a profit sharing system you can precisely calculate your
              total profit.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Text fontSize={"2xl"} textAlign={"center"} my={8}>
        Available Products
      </Text>
    </Box>
  );
};

export default MitraPage;
