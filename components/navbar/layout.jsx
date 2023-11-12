import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { SearchMobile } from "./Header/Search";
import Navbar from "./Navbar";

const Navigation = ({ products, setFilteredProducts }) => {
  return (
    <Box position="sticky" top="0" zIndex={100}>
      <Navbar />
      <Header />
      <SearchMobile
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </Box>
  );
};

export default Navigation;
