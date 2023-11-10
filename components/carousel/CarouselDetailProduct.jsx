'use client'

import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const CarouselDetailProduct = ({ productImages }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [productImages]);

  return (
    <Box position="relative">
      <Box position="relative" overflow="hidden">
        {productImages.map((image, index) => (
          <div
            key={index}
            style={{ display: index === selectedImageIndex ? "block" : "none" }}
          >
            <Image src={image} alt={`Product Image ${index}`} w="100%" h="auto" borderRadius={"lg"} />
          </div>
        ))}
        <Box
          position="absolute"
          bottom={0}
          width="100%"
          display="flex"
          justifyContent="center"
        >
          {productImages.map((_, buttonIndex) => (
            <Button
              key={buttonIndex}
              size="2"
              variant="unstyled"
              _focus={{ outline: "none" }}
              p={1}
              opacity={selectedImageIndex === buttonIndex ? 1 : 0.6}
              onClick={() => handleImageChange(buttonIndex)}
            >
              <Text fontSize="3xl">•</Text>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselDetailProduct;
