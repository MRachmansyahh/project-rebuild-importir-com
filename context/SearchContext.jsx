"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const setFilteredProducts = (filteredProducts) => {
    setSearchResults(filteredProducts);
  };

  return (
    <SearchContext.Provider value={{ searchResults, setFilteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export { SearchContext, SearchProvider, useSearch };
