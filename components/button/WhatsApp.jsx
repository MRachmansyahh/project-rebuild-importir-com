"use client";

import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Flex position="fixed" bottom="20px" right="20px" zIndex="1000">
      <Button
        bg="#25d366" // Warna latar belakang WhatsApp
        w="60px"
        h="60px"
        borderRadius="full" // Membuat bentuk bulan
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Link href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
          <Icon as={FaWhatsapp} w={8} h={8} color="white" />{" "}
          {/* Icon WhatsApp */}
        </Link>
      </Button>
    </Flex>
  );
};

export default WhatsappButton;
