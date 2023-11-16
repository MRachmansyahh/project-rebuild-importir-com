import { getProdukNatal, getProdukUnderSeratus } from '@/service/api';
import ProductCards from '@/components/card/ProductCards';
import { Text } from '@chakra-ui/react';

const SearchPage = async ({params}) => {
  const { keyword } = params
  const { products: underSeratusProducts } = await getProdukUnderSeratus();
  const { products: christmasProducts } = await getProdukNatal();

  const products = [...christmasProducts, ...underSeratusProducts].filter(product => {
    return product.title.toLowerCase().includes(keyword.toLowerCase())
  })

  return (
    <>
    <Text fontWeight={"bold"} fontSize={"xl"} my={4} p={4}>Result for {keyword}</Text>
    <ProductCards products={products} />
    
    </>
  )
}

export default SearchPage