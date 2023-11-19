import ProductCards from "@/components/card/ProductCards";
import { Text } from "@chakra-ui/react";
import { searchProducts } from "@/service/Typesense";

const SearchPage = async ({ params }) => {
  const { keyword } = params;

  const { products } = await searchProducts(keyword);

  console.log(products);

  console.log(keyword);

  return (
    <>
      <Text fontWeight={"bold"} fontSize={"xl"} my={4} p={4}>
        Result for {keyword}
      </Text>
      <ProductCards products={products} />
    </>
  );
};

export default SearchPage;
