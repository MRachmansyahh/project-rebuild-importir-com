import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchProducts from "../Search/SearchProduct";

const Navigation = () => {
  return (
    <Box position="sticky" top="0" zIndex={100}>
      <Navbar />
      <Header />
      <Box
        display={{ base: "block", md: "none" }}
        px={4}
        py={2}
        m={0}
        bg={"rgb(255, 214, 0)"}
      >
        <SearchProducts page={"search"}/>
      </Box>
    </Box>
  );
};

export default Navigation;
