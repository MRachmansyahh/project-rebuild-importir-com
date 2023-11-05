'use client';

import React from 'react';
import { Box, Icon, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const SearchWeb = () => {
  return (
    <Box bg={'rgb(255, 214, 0)'}>
      <InputGroup maxW={'full'} display={{ base: 'none', md: 'flex' }}>
        <Input
          type="search"
          placeholder="Search by Keyword / ID Product / Link"
          color={'black'}
          bg={'white'}
        />
        <InputRightAddon as={'button'} bg={'black'}>
          <Icon as={FiSearch} color={'white'} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

const SearchMobile = () => {
  return (
    <Box bg={'rgb(255, 214, 0)'} px={4} pb={2}>
      <InputGroup maxW={'full'} display={{ base: 'flex', md: 'none' }}>
        <Input
          type="search"
          fontSize={'sm'}
          placeholder="Search by Keyword / ID Product / Link"
          color={'black'}
          bg={'white'}
        />
        <InputRightAddon bg={'black'}>
          <Icon as={FiSearch} color={'white'} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export { SearchWeb, SearchMobile };
