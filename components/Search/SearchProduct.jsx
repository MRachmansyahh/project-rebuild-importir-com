"use client";

import { useRef } from "react";
import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SearchProducts = ({ page }) => {
    const serachRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = serachRef.current.value
        router.push(`/${page}/${keyword}`)
    }
  return (
    <Box>
      <InputGroup maxW={"full"}>
        <Input
          type="search"
          placeholder="Search by Keyword / ID Product / Link"
          color={"black"}
          bg={"white"}
          ref={serachRef}

        />
        <InputRightAddon as={"button"} onClick={handleSearch} bg={"black"}>
          <FiSearch as="button" color={"white"} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default SearchProducts