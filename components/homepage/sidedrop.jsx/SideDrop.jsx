import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { sidebarLinks } from "@/constants";

function SubCategories() {
  return (
    <Box>
      {sidebarLinks.map((link) => (
        <Popover key={link.category}>
          <PopoverTrigger>
            <Button>{link.category}</Button>
          </PopoverTrigger>
          <PopoverContent width="auto">
            <PopoverArrow />
            <PopoverBody>
              <Button>{link.subcategory}</Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ))}
    </Box>
  );
}

export default SubCategories;
