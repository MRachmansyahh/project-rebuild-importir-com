"use client";

import { Button } from "@chakra-ui/react";
import { useState } from "react";

function LoadMoreButton({ initialCount, increment }) {
  const [count, setCount] = useState(initialCount);

  const handleLoadMore = () => {
    setCount(count + increment);
  };

  return <Button onClick={handleLoadMore} bg="rgba(255, 214, 0)" h={7}>Load More</Button>;
}

export default LoadMoreButton;
