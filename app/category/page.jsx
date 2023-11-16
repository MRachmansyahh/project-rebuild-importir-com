import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { category } from "@/constants";
const CategoryPage = () => {
  
  return (
    <Box minH={"100vh"}>
      <SimpleGrid p={4} spacing={2} column={5} minChildWidth={"100px"}>
        {category.map((category) => (
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
              alt="image"
            />
            <Text textAlign={"center"}>{category.category}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryPage;
