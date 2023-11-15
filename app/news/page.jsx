'use client'

import React, { useState } from 'react';
import { Box, Text, InputGroup, Input, Button } from "@chakra-ui/react";
import NewsCards from "@/app/news/NewsCards";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {

    console.log('Searching for:', searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box bg={"white"} borderRadius={"xl"} boxShadow={"xl"} p={4} m={4}>
      <Text fontWeight={"bold"} fontSize={"xl"} my={4}>
        Latest new articles
      </Text>
      {/* Moved InputGroup component into NewsPage */}
      <InputGroup maxW={'xl'} mx={'auto'} my={4}>
        <Input
          type="search"
          placeholder="Search by title or description"
          color="black"
          bg="white"
          h={7}
          value={searchTerm}
          onChange={handleInputChange}
        />
        {/* <Button mx={2} h={7} bg={'rgba(255, 214, 0)'} onClick={handleSearch}>
          Search
        </Button> */}
      </InputGroup>
      {/* Pass search-related props to NewsCards component */}
      <NewsCards
        layout={"horizontal"}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
    </Box>
  );
};

export default NewsPage;
