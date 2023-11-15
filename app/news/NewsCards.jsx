'use client'

import React, { useEffect, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Card, CardBody, Flex, Image, SimpleGrid, Text, InputGroup, Input, Button } from '@chakra-ui/react';
import { getNews } from '@/service/api';

const searchNewsCards = (newsCards, searchTerm) => {
  return newsCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const NewsCards = ({ layout, searchTerm, handleSearch, handleInputChange }) => {
  const [allNewsCards, setAllNewsCards] = useState([]);
  const [filteredNewsCards, setFilteredNewsCards] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsCards = await getNews();
      setAllNewsCards(newsCards);
      setFilteredNewsCards(newsCards);
    };

    fetchNews();
  }, []); // Fetch news cards on component mount

  useEffect(() => {
    const filteredCards = searchTerm
      ? searchNewsCards(allNewsCards, searchTerm)
      : allNewsCards;

    setFilteredNewsCards(filteredCards);
  }, [searchTerm, allNewsCards]);

  return (
      <SimpleGrid
        as="div"
        columns={{ base: 1, sm: 2, md: 4 }}
        display={layout === 'vertical' ? 'block' : 'grid'}
      >
        {filteredNewsCards.map((card, index) => (
          <Card
            key={index}
            mx={2}
            my={4}
            cursor={'pointer'}
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
              <Image src={card.featured_image} alt={card.title} />
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
  );
};

export default NewsCards;
