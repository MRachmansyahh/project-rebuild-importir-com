import HeaderProducts from '@/components/ProductList/Header'
import { getProdukNatal, getProdukUnderSeratus } from '@/service/api';
import { Box } from '@chakra-ui/react';
import ProductCards from '@/components/card/ProductCards';

const CatalogPage = async () => {
  const { products: underSeratusProducts, info: underSeratusInfo, slug: underSeratusSlug } = await getProdukUnderSeratus();
  const { products: christmasProducts, info: christmasInfo, slug: christmasSlug } = await getProdukNatal();
  
  
  
  return (
    <>
    {/* Products Christmas*/}
    <Box>
      <HeaderProducts info={christmasInfo} slug={christmasSlug}/>
      <ProductCards products={christmasProducts}  product_id={christmasProducts[0].product_id}/>
    </Box>
    
    {/* Products Under 100K */}
    <Box>
      <HeaderProducts info={underSeratusInfo} slug={underSeratusSlug}/>
      <ProductCards products={underSeratusProducts} product_id={underSeratusProducts[0].product_id}/>
    </Box>
    
    </>
  )
}

export default CatalogPage