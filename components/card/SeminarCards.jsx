import React from "react";
import { Box, Flex, Text, Button, Divider, Avatar, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { getListSeminarMember, getListSeminarNonMember } from "@/service/api";

const SeminarCards = async ({ isLogin }) => {

  const online = await getListSeminarMember()
  const offline = await getListSeminarNonMember()

  console.log("isLogin", isLogin);

  const seminar = isLogin ? online : offline

  console.log("seminar", seminar);

  return (
    <Box overflowY="auto" maxH={"calc(100vh - 300px)"} sx={{ margin: "10px" }}>
      {seminar.map((data) => (
        <Box key={data.id}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            my={4}
            flexDir={{ base: "column", sm: "row" }}
            gap={2}
          >
            <Avatar name={ isLogin ? data.title : data.city } src={isLogin ? data.image : data.maps} />

            <Flex
              flexDir="column"
              alignItems={{ base: "center", sm: "flex-start" }}
              flex="1"
              m={4}
            >
              <HStack alignItems="top">
                <Text fontWeight="bold" fontSize="sm">
                  {isLogin ? data.title : data.city}
                </Text>
                <Text
                  bgColor={
                    data.is_online === "online_zoom" ? "blue.300" : "green.300"
                  }
                  h={5}
                  px={1}
                  borderRadius="lg"
                  fontSize="sm"
                >
                  {isLogin ? data.is_online === "online_zoom" ? "ONLINE" : "OFFLINE" : data.is_online === "online_zoom" ? "ONLINE" : "OFFLINE"}
                </Text>
              </HStack>

              <Text fontSize="sm">{isLogin ? data.event_date : data.live_date}</Text>
            </Flex>

            <Link href="#">
              <Button colorScheme="green" fontSize="sm" h={10}>
                {isLogin ? "Register now" : "Join now"}
              </Button>
            </Link>
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default SeminarCards;