import { Box, Button, Flex, Icon, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { BiSolidCategory, BiNews } from "react-icons/bi";
import { FaUserFriends, FaUserGraduate } from "react-icons/fa";
import Carousel from "../carousel/Carousel";
import ProductCarousel from "../carousel/Carousel";

const Middle = () => {
  return (
    <Stack minH={"500px"}>
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
        
        <SimpleGrid
          columns={4}
          spacing={4}
          marginTop={2}
          w={"100%"}
        >
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"100%"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={{ base: 6, md: 10 }} as={FaUserGraduate} />
            Academy
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"100%"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={{ base: 6, md: 10 }} as={BiSolidCategory} />
            Category
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"100%"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={{ base: 6, md: 10 }} as={FaUserFriends} />
            Consultation
          </Button>
          <Button
            fontSize={13}
            bg={"rgb(255, 214, 0)"}
            color={"gray.600"}
            display={"flex"}
            flexDir={"column"}
            height={"160px"}
            width={"100%"}
            mx={1}
            my={1}
          >
            <Icon marginBottom={4} boxSize={{ base: 6, md: 10 }} as={BiNews} />
            News
          </Button>
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Middle;
