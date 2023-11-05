import { sidebarLinks } from "@/constants";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const Left = () => {
  const toast = useToast();
  const [activeLink, setActiveLink] = useState(null);
  const [showSidedrop, setShowSidedrop] = useState(false);

  const handleLinkClick = (title) => {
    if (activeLink === title) {
      setShowSidedrop(!showSidedrop);
    } else {
      setActiveLink(title);
      setShowSidedrop(true);
    }

    toast({
      title: `Welcome to Importir ${title}`,
      status: "info",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex justifyContent={"space-between"} gap={4}>
        <Button
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          height={"80px"}
          width={"70px"}
          variant={"none"}
          bg={activeLink === "CN" ? "rgba(255, 214, 0)" : "gray.200"}
          onClick={() => handleLinkClick("CN")}
        >
          <Text fontSize="2xl" fontWeight="bold">
            CN
          </Text>
          <Text fontSize="sm">China</Text>
        </Button>
        <Button
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          height={"80px"}
          width={"70px"}
          variant={"none"}
          bg={activeLink === "US" ? "rgba(255, 214, 0)" : "gray.200"}
          onClick={() => handleLinkClick("US")}
        >
          <Text fontSize="2xl" fontWeight="bold">
            US
          </Text>
          <Text fontSize="sm">USA</Text>
        </Button>
        <Button
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          height={"80px"}
          width={"70px"}
          variant={"none"}
          bg={activeLink === "KR" ? "rgba(255, 214, 0)" : "gray.200"}
          onClick={() => handleLinkClick("KR")}
        >
          <Text fontSize="2xl" fontWeight="bold">
            KR
          </Text>
          <Text fontSize="sm">Korea</Text>
        </Button>
      </Flex>

      <Flex display={{ base: "none", md: "block" }}>
        <Text fontSize="lg" fontWeight="bold" mt={4} ms={2}>
          Category
        </Text>

        <Stack overflowY="scroll" maxH="480px">
          {sidebarLinks.map((link) => (
            <Popover
              key={link.category}
              placement="right-start"
              as="button"
              width="100%"
              variant="none"
              p={2}
              borderRadius="xl"
            >
              <PopoverTrigger>
                <Flex
                  as="button"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="md"
                  _hover={{ backgroundColor: "rgba(255, 214, 0)" }}
                  bg={
                    activeLink === link.category ? "rgba(255, 214, 0)" : "none"
                  }
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Image src={link.image} />
                    <Text fontSize={"sm"}>{link.category}</Text>
                  </Box>
                  <Box>
                    <Icon as={BiChevronRight} />
                  </Box>
                </Flex>
              </PopoverTrigger>

              <PopoverContent>
                <PopoverBody>
                  {link.subcategory.map((subcategory) => (
                    <Text key={subcategory}>{subcategory}</Text>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Left;
