import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { categories } from "@/constants";
const CategoryPage = () => {
  return (
    <Box minH={"100vh"}>
      <SimpleGrid p={4} spacing={2} column={5} minChildWidth={"100px"}>
        {categories.map((category) => (
          <Box
            key={category.id}
            bg={"white"}
            rounded={"xl"}
            cursor={"pointer"}
            p={4}
          >
            <Image
              mx="auto"
              my="auto"
              src={category.image}
              alt={category.title}
            />
            <Text textAlign={"center"}>{category.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryPage;
