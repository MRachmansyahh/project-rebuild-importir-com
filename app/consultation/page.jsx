import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import Calender from "@/components/calender/Calender";

const ConsultationPage = () => {
  return (
    <Box bg={"white"} borderRadius={"xl"} mt={4} p={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Flex justify={{ base: "center", md: "flex-end" }}>
          <Image
            src="/consultation.png"
            alt="Logo"
            borderStartRadius={{ base: "none", md: "xl" }}
            w={"auto"}
          />
        </Flex>
        <Flex justify={{ base: "center", md: "flex-start" }}>
          <Image
            src="/consultation2.png"
            alt="Logo"
            borderEndRadius={{ base: "none", md: "xl" }}
            w={"auto"}
          />
        </Flex>
      </SimpleGrid>

      <Calender />
    </Box>
  );
};

export default ConsultationPage;
