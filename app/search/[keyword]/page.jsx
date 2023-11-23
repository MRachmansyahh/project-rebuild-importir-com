import ProductCards from "@/components/card/ProductCards";
import { Text, Box } from "@chakra-ui/react";
import { searchProducts } from "@/service/Typesense";
import { getProdukNatal, getProdukUnderSeratus } from "@/service/api";

const SearchPage = async ({ params }) => {
  const { keyword } = params;

  const { products } = await searchProducts(keyword);

  // const {products: christmasProducts} = await getProdukNatal();
  // const {products: underSeratusProducts} = await getProdukUnderSeratus();

  // const products = [...christmasProducts, ...underSeratusProducts].find((product) => product.product_id === params.product_id);

  console.log(products);

  console.log(keyword);

  if (!products || products.length === 0) {
    return (
      <Text fontWeight={"bold"} fontSize={"xl"} my={4} p={4}>
        No products found
      </Text>
    );
  }

  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"xl"} my={4} p={4}>
        Result for {keyword}
      </Text>
      <ProductCards products={products} />
    </Box>
  );
};

export default SearchPage;
