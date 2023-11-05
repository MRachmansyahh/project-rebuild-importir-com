import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidCategory, BiNews } from "react-icons/bi";
import { FaUserFriends, FaUserGraduate } from "react-icons/fa";
import Carousel from "../carousel/Carousel";
import ProductCarousel from "../carousel/Carousel";

const Middle = () => {
  return (
    <Stack>
      <Box marginBottom={1} bg={"white"} borderRadius={"xl"} boxShadow={"xl"}>
        <ProductCarousel />
      </Box>

      <Box
        mb={0}
        marginTop={1}
        bg={"white"}
        p={4}
        borderRadius={"xl"}
        boxShadow={"xl"}
        display={{ base: "none", md: "block" }}
      >
        <Text fontSize="3xl" fontWeight="bold" textAlign={"center"}>
          Menu List
        </Text>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          marginTop={2}
          flexWrap={"wrap"}
        >
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"120px"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={10} as={FaUserGraduate} />
            Academy
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"120px"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={10} as={BiSolidCategory} />
            Category
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"120px"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={10} as={FaUserFriends} />
            Consultation
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"120px"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={10} as={BiNews} />
            News
          </Button>
        </Flex>
      </Box>
    </Stack>
  );
};

export default Middle;
