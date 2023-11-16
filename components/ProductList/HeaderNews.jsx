import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCarousel from '../carousel/Carousel'
import SearchProducts from '../Search/SearchProduct'

const HeaderNews = () => {
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"xl"} my={4}>
        Latest new articles
      </Text>
      <ProductCarousel/>
      <Box p={2} my={4}>
      <SearchProducts page={"news"}/>
      </Box>
    </Box>
  )
}

export default HeaderNews