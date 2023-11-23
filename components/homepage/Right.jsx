import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NewsCard from "../card/NewsCard";
import { getNews } from "@/service/api";

const Right = async () => {
  const news = await getNews();
  return (
    <Box>
      <Flex
        bg={"#FFD600"}
        borderRadius={"lg"}
        justifyContent={"space-around"}
        alignItems={"center"}
        marginBottom={4}
      >
        <Image
          src="/maskot.png"
          alt="logo"
          height={"48px"}
          borderRadius={"full"}
          mx={2}
        />
        <Text p={2} fontSize={"sm"}>
          Welcome to importir Log In Your Account Fill in my purchases request
        </Text>
      </Flex>

      <Box marginBottom={4}>
        <Image src="/banner1.png" alt="logo" />
      </Box>

      <Box>
        <Flex
          justifyContent={"space-between"}
          marginBottom={2}
          fontSize={"md"}
          fontWeight={"bold"}
          mx={4}
        >
          <Text>Importir News</Text>
          <Link href="/login">
            <Text color={"blue.500"} fontStyle={"italic"}>
              see all
            </Text>
          </Link>
        </Flex>

        <Flex >
          <NewsCard news={news} layout={"vertical"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Right;
