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
import ReactHtmlParser from 'react-html-parser';

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
              src={news?.featured_image}
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
