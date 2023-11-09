import {
  Box,
  Flex,
  Text,
  Avatar,
  Divider,
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";


const SeminarMemberCards = async () => {

  console.log(data)

  return (
    <Box>
      {data.map((data) => (
        <Box key={data.id}>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            my={4}
            flexDir={{ base: "column", sm: "row" }}
            gap={2}
          >
            <Avatar name={data.image} src={data.image} />

            <Flex
              flexDir="column"
              alignItems={{ base: "center", sm: "flex-start" }}
              flex="1"
              m={4}
            >
              <HStack alignItems={"top"}>
                <Text fontWeight={"bold"} fontSize={"sm"}>
                  {data.title}
                </Text>
                <Text
                  bgColor={data.is_online === "online_zoom" ? "blue.300" : "green.300"}
                  h={5}
                  px={1}
                  borderRadius="lg"
                  fontSize={"sm"}
                >
                  {data.is_online === "online_zoom" ? "ZOOM" : "LIVE"}
                </Text>
              </HStack>

              <Text fontSize={"sm"}>{data.live_date}</Text>
            </Flex>

            <Link href={"#"}>
              <Button colorScheme="green" fontSize={"sm"} h={10}>
                Join now
              </Button>
            </Link>
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default SeminarMemberCards;