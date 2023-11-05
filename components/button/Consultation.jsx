"use client";

import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const ConsultationButton = () => {
  return (
    <Flex position="fixed" bottom="20px" left="20px" zIndex="1000">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/consultation" target="_blank" rel="noreferrer">
          <Image
            src="https://d2jnbxtr5v4vqu.cloudfront.net/filemanager/Imam/consultation-now-2023_10_05_17_09_53.png"
            alt="consultation"
            width={"100px"}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default ConsultationButton;
