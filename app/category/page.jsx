import { getCategories } from "@/service/api";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
const CategoryPage = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <Box minH={"100vh"}>
      <SimpleGrid p={4} spacing={2} column={5} minChildWidth={"100px"}>
        {categories.map((category) => (
          <Box
            key={category.id}
            as="button"
            bg={"white"}
            rounded={"xl"}
            cursor={"pointer"}
            p={4}
          >
            <Image
              mx="auto"
              my="auto"
              src={category.image}
              alt={category.category}
            />
            <Text textAlign={"center"}>{category.category}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryPage;
