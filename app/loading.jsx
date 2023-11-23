import { Box, Spinner, Text } from '@chakra-ui/react';
const Loading = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner size="xl" color="blue.500" />
        <Text mt={4} fontSize="xl" fontWeight="bold" color="gray.600">
          Wait for it...
        </Text>
      </Box>
    );
  };

export default Loading