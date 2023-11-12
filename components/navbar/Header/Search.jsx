"use client";

import { useState } from "react";
import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "@/context/SearchContext";

const SearchWeb = ({ products }) => {
  const context = useSearch();
  const { setFilteredProducts } = context;
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setFilteredProducts(value ? [] : products);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Box bg={"rgb(255, 214, 0)"}>
      <InputGroup maxW={"full"} display={{ base: "none", md: "flex" }}>
        <Input
          type="search"
          placeholder="Search by Keyword / ID Product / Link"
          color={"black"}
          bg={"white"}
          value={searchValue}
          onChange={handleChange}
        />
        <InputRightAddon as={"button"} bg={"black"}>
          <FiSearch as="button" onClick={handleSearch} color={"white"} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

const SearchMobile = ({ products }) => {
  const context = useSearch();
  const { setFilteredProducts } = context;
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Box bg={"rgb(255, 214, 0)"} px={4} pb={2}>
      <InputGroup maxW={"full"} display={{ base: "flex", md: "none" }}>
        <Input
          type="search"
          fontSize={"sm"}
          placeholder="Search by Keyword / ID Product / Link"
          color={"black"}
          bg={"white"}
          value={searchValue}
          onChange={handleChange}
        />
        <InputRightAddon bg={"black"}>
          <FiSearch as="button" onClick={handleSearch} color={"white"} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export { SearchWeb, SearchMobile };
