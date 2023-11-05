import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      display="flex"
      bg={"white"}
      flexDirection="column"
      color="black.100"
      mt={5}
      borderTop="1px solid"
      borderColor="gray.100"
    >
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        p={6}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Box>
          <Image src="/logo2.png" alt="logo" mx={"auto"} />
          <Text fontSize="base" color="gray.700" textAlign={"center"}>
            © 2023 IMPORTIR.COM All rights reserved
          </Text>
        </Box>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          gap={10}
          p={6}
        >
          {footerLinks.map((link) => (
            <Box
              key={link.title}
              gap={6}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text fontWeight="bold" marginBottom={2}>
                {link.title}
              </Text>
              <Flex
                flexWrap="wrap"
                flexDirection={"column"}
                gap={2}
                textAlign={{ base: "center", md: "left" }}
              >
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url} color="gray.500">
                    {item.title}
                  </Link>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        borderTop="1px solid"
        borderColor="gray.100"
        p={6}
      >
        <Text>2023 IMPORTIR.COM All Rights Reserved</Text>
        <Flex className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" color="gray.500" mr={4}>
            Privacy Policy
          </Link>
          <Link href="/" color="gray.500" ml={4}>
            Terms and Conditions
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
