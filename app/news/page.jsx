import { Box} from "@chakra-ui/react";
import { getNews } from '@/service/api';
import HeaderNews from "@/components/ProductList/HeaderNews";
import NewsCard from "@/components/card/NewsCard";

const NewsPage = async () => {
  const news = await getNews()
 
  return (
    <Box bg={"white"} borderRadius={"xl"} boxShadow={"xl"} p={4} m={4}>
      <HeaderNews/>
      <NewsCard news={news} layout={"horizontal"} />
    </Box>
  );
};

export default NewsPage;
