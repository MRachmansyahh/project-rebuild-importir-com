'use client'

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Image, SimpleGrid, Text,  } from "@chakra-ui/react";
import React, { useState } from "react";
import NewsModal from "../modal/NewsModal";

const NewsCard = ({ news, layout }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleCardClick = (news) => {
    setSelectedNews(news);
  };

  const handleModalClose = () => {
    setSelectedNews(null);
  };

  return (
    <>
    <SimpleGrid
      as="div"
      columns={{ base: 1, sm: 2, md: 4 }}
      display={layout === "vertical" ? "block" : "grid"}

    >
      {news.map((card, index) => (
        <Card
          as={"button"}
          key={index}
          mx={2}
          my={4}
          cursor={'pointer'}
          onClick={() => handleCardClick(card)}
          _hover={
            layout === 'horizontal'
              ? { transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }
              : {}
          }
        >
          <CardBody>
            <Flex justifyContent="flex-end">
              <ArrowForwardIcon fontSize="xl" mr={2} />
            </Flex>
            <Image src={card.featured_image} alt="image" />
            <Flex flexDir="column" mt={4}>
              <Text fontSize="sm" textAlign="start" fontWeight="bold">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="start" marginTop={2}>
                {card.category_name}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>

    <NewsModal news={selectedNews} onClose={handleModalClose} />

    </>
  );
};

export default NewsCard;
