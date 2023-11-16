import DetailProduct from '@/components/card/DetailProduct';
import { getProdukNatal, getProdukUnderSeratus } from '@/service/api';
import { Box } from '@chakra-ui/react'
import React from 'react'

const DetailPage = async ({params: {product_id}}) => {
  const { products: christmasProducts } = await getProdukNatal();
  const { products: underSeratusProducts } = await getProdukUnderSeratus();

  const product = [...christmasProducts, ...underSeratusProducts].find((product) => product.product_id === product_id);

  return (
    <Box>
      <DetailProduct product={product}/>
    </Box>
  )
}

export default DetailPage