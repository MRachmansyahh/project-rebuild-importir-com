import { getListSeminarNonMember } from "@/service/api";
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

const SeminarNonMemberCards = async () => {
  const data = await getListSeminarNonMember();
  console.log(data);

  return (
    <Box overflowY="auto" maxH={"calc(100vh - 300px)"} sx={{ margin: "10px" }}>
      {data.map((data) => (
        <Box key={data.id}>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            my={4}
            flexDir={{ base: "column", sm: "row" }}
          >
            <Avatar name={data.city} src={data.maps} />

            <Flex
              flexDir="column"
              alignItems={{ base: "center", sm: "flex-start" }}
              flex="1"
              m={4}
            >
              <HStack>
                <Text fontWeight={"bold"} fontSize={"sm"}>
                  {data.city}
                </Text>
                <Text
                  bgColor={data.is_online ? "blue.300" : "green.300"}
                  px={1}
                  borderRadius="lg"
                  fontSize={"sm"}
                >
                  {data.is_online ? "ONLINE" : "OFFLINE"}
                </Text>
              </HStack>

              <Text fontSize={"sm"}>{data.event_date}</Text>
            </Flex>

            <Link href={"#"}>
              <Button colorScheme="green" fontSize={"sm"} h={10}>
                Register now
              </Button>
            </Link>
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default SeminarNonMemberCards;
