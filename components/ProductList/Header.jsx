import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeaderProducts = ({info, slug}) => {
  return (
    <Box p={4}>
      <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} my={4}>
        {info}
      </Text>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {slug}
      </Text>
    </Box>
  );
};

export default HeaderProducts;
