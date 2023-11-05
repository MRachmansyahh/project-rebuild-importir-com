"use client";

import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { sectionCards } from "@/constants";
import { LiaTagSolid } from "react-icons/lia";
import { formatRupiah } from "@/constants";

const SectionCards = () => {
  // Membuat objek untuk mengelompokkan kartu berdasarkan tag
  const tagGroups = {};
  sectionCards.forEach((card) => {
    if (!tagGroups[card.tag]) {
      tagGroups[card.tag] = [];
    }
    tagGroups[card.tag].push(card);
  });

  return (
    <Box overflowY="auto" maxH={"calc(100vh - 300px)"} sx={{ margin: "10px" }}>
      {Object.entries(tagGroups).map(([tag, cards]) => (
        <Box key={tag} p={4} pt={0}>
          <Text fontWeight={"bold"} fontStyle={"italic"} fontSize={"xl"}>
            {tag}
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
            {cards.map((card, index) => (
              <Card key={index} boxShadow={"lg"}>
                <Image src={card.image} alt={card.title} />

                <CardBody>
                  <Text fontWeight={"bold"} mb={2}>
                    {card.title}
                  </Text>
                  <Text color={"gray.500"} fontSize={"sm"} isTruncated>
                    {card.description}
                  </Text>

                  <Box mt={4}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      mb={1}
                    >
                      <Text fontSize={"xs"}>
                        <Icon as={LiaTagSolid} me={2} />
                        Tags
                      </Text>
                      <Text fontSize={"xs"}>Start From</Text>
                    </Flex>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"2xs"}
                        bg={"green.300"}
                        p={2}
                        borderRadius={4}
                        isTruncated
                        w={"50%"}
                      >
                        {card.tag.toUpperCase()}
                      </Text>
                      <Text fontSize={"md"}>
                        {formatRupiah(card.startingPrice)}
                      </Text>
                    </Flex>
                  </Box>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default SectionCards;
