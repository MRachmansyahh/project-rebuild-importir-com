import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

const NewsModal = ({ selectedCard, onClose }) => {
  return (
    <Modal isOpen={!!selectedCard} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Description</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Image
              mb={4}
              borderRadius="lg"
              src={selectedCard?.featured_image}
              alt={selectedCard?.title}
            />
            <Text fontWeight="bold">{selectedCard?.title}</Text>
            <Text>{selectedCard?.description}</Text>
            <Box my={4}>
              <Text>Hi, Sibat Portir!</Text>
              <Text>{`Berikut link recording untuk ${selectedCard?.title}`}</Text>
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
  );
};

export default NewsModal;
