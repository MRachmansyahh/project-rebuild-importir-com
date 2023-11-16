"use client";

import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const LoadMoreButton = ({ onLoadMore }) => {
  const [count, setCount] = useState(5);

  const handleLoadMore = () => {
    setCount(count + 5);
    onLoadMore(count);
  };

  
  return (
    <Flex justifyContent={"center"} alignItems={"center"} my={4}>
      <Button onClick={handleLoadMore} bg="rgba(255, 214, 0)" h={7}>
        Load More
      </Button>
    </Flex>
  );
};

export default LoadMoreButton;
