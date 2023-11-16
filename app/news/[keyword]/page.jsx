import { getNews } from '@/service/api';
import { Box, Text } from '@chakra-ui/react';
import NewsCard from '@/components/card/NewsCard';
import HeaderNews from '@/components/ProductList/HeaderNews';

const SearchPage = async ({params}) => {
  const { keyword } = params
  const news  = await getNews()

  const newsFiltered = news.filter((news) => {
    return news.title.toLowerCase().includes(keyword.toLowerCase())
  })

  return (
    <Box bg={"white"} borderRadius={"xl"} boxShadow={"xl"} p={4} m={4}>
    <HeaderNews/>
    <Text fontWeight={"bold"} fontSize={"xl"} my={4} p={4}>Result for {keyword}</Text>
    <NewsCard news={newsFiltered} />
    </Box>
  )
}

export default SearchPage