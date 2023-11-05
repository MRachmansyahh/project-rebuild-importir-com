import { Box, Text } from "@chakra-ui/react";
import React from "react";

const RefundPage = () => {
  return (
    <Box minH={"100vh"} bg={"white"}>
      <Box>
        <Text p={4} fontSize={"xl"} fontWeight={"bold"}>
          Refund Transaction List
        </Text>
      </Box>
      <Box>
        <Text
          color={"gray.500"}
          textAlign={"center"}
          p={4}
          fontSize={"xl"}
          fontWeight={"bold"}
        >
          Invoice unavailable
        </Text>
      </Box>
    </Box>
  );
};

export default RefundPage;
