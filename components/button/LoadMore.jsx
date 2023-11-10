"use client";

import { Button } from "@chakra-ui/react";
import { useState } from "react";

function LoadMoreButton() {
  const [count, setCount] = useState(5);

  const handleLoadMore = () => {
    setCount(count + 5);
  };

  return <Button onClick={handleLoadMore} bg="rgba(255, 214, 0)" h={7}>Load More</Button>;
}

export default LoadMoreButton;
