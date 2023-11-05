import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const ProductCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products = [
    {
      image:
        "https://importir-new-hk.s3.ap-east-1.amazonaws.com/general/WkjZ2oV3gpNBrUYLtDrqAe9mfZX10qfSptIDvVa6.png",
    },
    {
      image:
        "https://importir-new-hk.s3.ap-east-1.amazonaws.com/general/By2cXXuojEE9KaW5UEFQg2ZTRBtvOenoLI0YAc1l.png",
    },
    {
      image:
        "https://importir-new-hk.s3.ap-east-1.amazonaws.com/general/v4YpGtKCyHl3LokVllsRyOyOcUYucLntacylAiLy.png",
    },
    {
      image:
        "https://importir-new-hk.s3.ap-east-1.amazonaws.com/general/FtdjACYPtSlKiZA7pFdNooRdZRMMJFEqfiCmVdy8.png",
    },
    {
      image:
        "https://importir-new-hk.s3.ap-east-1.amazonaws.com/general/Pp5vq3bj56p2nER8QtGE6f7NNqgZORbHcSmqMU3z.png",
    },
  ];

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  })

  return (
    <Box position="relative">
      <Box position="relative" overflow="hidden">
        {products.map((product, index) => (
          <div
            key={index}
            style={{ display: index === selectedImageIndex ? "block" : "none" }}
          >
            <Image src={product.image} w="100%" h="auto" borderRadius={"lg"} />
          </div>
        ))}
        <Box
          position="absolute"
          bottom={0}
          width="100%"
          display="flex"
          justifyContent="center"
        >
          {products.map((_, buttonIndex) => (
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

export default ProductCarousel;
