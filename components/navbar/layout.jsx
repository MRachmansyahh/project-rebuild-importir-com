import { Box } from "@chakra-ui/react"
import Header from "./Header"
import { SearchMobile } from "./Header/Search"
import Navbar from "./Navbar"


const Navigation = () => {
  return (
    <Box position="sticky"
    top="0"
    zIndex={100}>
      
      <Navbar />
      <Header/>
      <SearchMobile/>
    </Box>
  )
}

export default Navigation