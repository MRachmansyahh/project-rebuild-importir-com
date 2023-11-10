import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { getNews } from "@/service/api";


const NewsCards = async ({ layout }) => {
  const newsCards = await getNews();
  console.log(newsCards);

  return (
    <SimpleGrid
      as="div"
      columns={{ base: 1, sm: 2, md: 4 }}
      display={layout === "vertical" ? "block" : "grid"}
    >
      {newsCards.map((card, index) => (
        <Card
          key={index}
          mx={2}
          my={4}
          cursor={"pointer"}
          _hover={
            layout === "horizontal"
              ? { transform: "scale(1.05)", transition: "all 0.2s ease-in-out" }
              : {}
          }
        >
          <CardBody>
            <Flex justifyContent="flex-end">
              <ArrowForwardIcon fontSize="xl" mr={2} />
            </Flex>
            <Image src={card.featured_image} alt={card.title} />
            <Flex flexDir="column" mt={4}>
              <Text fontSize="sm" textAlign="start" fontWeight="bold">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="start" marginTop={2}>
                {card.category_name}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default NewsCards;