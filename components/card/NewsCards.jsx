import React, { useState } from "react";
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
import { newsCards } from "@/constants";

const NewsCards = ({ layout }) => {
  const [displayCount, setDisplayCount] = useState(4);
  const [selectedCard, setSelectedCard] = useState(null);
  const showAll = displayCount >= newsCards.length;

  const handleLoadMore = () => {
    setDisplayCount(showAll ? 4 : displayCount + 4);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <SimpleGrid
      as="div"
      columns={{ base: 1, sm: 2, md: 4 }}
      display={layout === "vertical" ? "block" : "grid"}
    >
      {newsCards.slice(0, displayCount).map((card) => (
        <Card
          key={card.id}
          mx={2}
          my={4}
          cursor={"pointer"}
          onClick={() => handleCardClick(card)}
          _hover={
            layout === "horizontal"
              ? { transform: "scale(1.05)", transition: "all 0.2s ease-in-out" }
              : {}
          }
        >
          <CardBody>
            <Flex justifyContent="flex-end">
              <Icon as={ArrowForwardIcon} fontSize="xl" mr={2} />
            </Flex>
            <Image src={card.image} alt={card.title} />
            <Flex flexDir="column" mt={4}>
              <Text fontSize="sm" textAlign="start" fontWeight="bold">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="start" marginTop={2}>
                {card.description}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
      {newsCards.length > 4 && (
        <Flex justify="start" mx={2}>
          <Button onClick={handleLoadMore} bg="rgba(255, 214, 0)" h={7}>
            {showAll ? "Show Less" : "Load More"}
          </Button>
        </Flex>
      )}

      {selectedCard && (
        <Modal isOpen={true} onClose={closeModal} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Description</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Image
                  mb={4}
                  borderRadius="lg"
                  src={selectedCard.image}
                  alt={selectedCard.title}
                />
                <Text fontWeight="bold">{selectedCard.title}</Text>
                <Text>{selectedCard.description}</Text>
                <Box my={4}>
                  <Text>Hi, Sibat Portir!</Text>
                  <Text>{`Berikut link recording untuk ${selectedCard.title}`}</Text>
                  <Link href="/">
                    <Text color="blue.500" fontStyle="italic">
                      TONTON DISINI
                    </Text>
                  </Link>
                  <Text>Selamat Menyaksikan!</Text>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </SimpleGrid>
  );
};

export default NewsCards;
