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
} from "@chakra-ui/react";

const NewsModal = ({ news, onClose }) => {

  return (
    <Modal isOpen={!!news} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Description</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Image
              mb={4}
              borderRadius="lg"
              src={`https://importir.s3.ap-southeast-1.amazonaws.com/images/${news?.featured_image}`}
              alt={news?.title}
            />
            <Text fontWeight="bold">{news?.title}</Text>
            <Text>{news?.category_name}</Text>
            <Box my={4}>
              <Text>{news?.description}</Text>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewsModal;
