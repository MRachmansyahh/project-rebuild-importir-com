"use client";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../service/firebaseApp";
import Link from "next/link";
import { BsDropbox, BsSuitHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useToast } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const HeaderLogin = () => {
  const toast = useToast();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartItem = cart.length;
  const wishlistItem = wishlist.length;
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success");
        toast({
          title: "Successfully logged out",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex>
      <Flex align="flex-end" justify="flex-end" display={{base: "none", sm: "flex"}}>
        <Link href="/wishlist">
          <Button bg="none" variant="none" h={7}>
            <Icon as={BsSuitHeart} color="black" fontSize="xl" />
            <Badge
              position="absolute"
              top="-4px"
              right="-px"
              colorScheme="red"
              bg="red"
              borderRadius="full"
              p={1}
              color="white"
            >
              {wishlistItem}
            </Badge>
          </Button>
        </Link>
      </Flex>
      <Flex align="flex-end" justify="flex-end" display={{base: "none", sm: "flex"}}>
        <Link href="/cart">
          <Button bg="none" variant="none" h={7}>
            <Icon as={FiShoppingCart} color="black" fontSize="xl" />
            <Badge
              position="absolute"
              top="-4px"
              right="-1px"
              colorScheme="red"
              bg="red"
              borderRadius="full"
              p={1}
              color="white"
            >
              {cartItem}
            </Badge>
          </Button>
        </Link>
      </Flex>

      <Menu>
        <MenuButton as={Button} gap={1} bg="none" variant="none" h={7}>
          <Flex alignItems="center" gap={1} justifyContent={"center"}>
            <Icon as={HamburgerIcon} color="black" />
            <Text>Menu</Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <Link href={"/"}>
            <MenuItem fontSize={"xs"}>Home</MenuItem>
          </Link>
          <Link href={"/category"}>
            <MenuItem fontSize={"xs"}>Category</MenuItem>
          </Link>
          <Link href={"/academy"}>
            <MenuItem fontSize={"xs"}>Academy</MenuItem>
          </Link>
          <Link href={"/crowdfund"}>
            <MenuItem fontSize={"xs"}>Crowdfund</MenuItem>
          </Link>
          <Link href={"/news"}>
            <MenuItem fontSize={"xs"}>News</MenuItem>
          </Link>
          <Link href={"/cbm"}>
            <MenuItem fontSize={"xs"}>CBM</MenuItem>
          </Link>
          <Link href={"/refund"}>
            <MenuItem fontSize={"xs"}>Refund</MenuItem>
          </Link>
          <Link href={"/mitra"}>
            <MenuItem fontSize={"xs"}>Mitra</MenuItem>
          </Link>
          <Link href={"/shipping"}>
            <MenuItem fontSize={"xs"}>Shipping</MenuItem>
          </Link>
          <Link href={"/escrow"}>
            <MenuItem fontSize={"xs"}>Escrow</MenuItem>
          </Link>
          <Link href={"/consultation"}>
            <MenuItem fontSize={"xs"}>Consultation</MenuItem>
          </Link>
          <Link href={"/source-for-you"}>
            <MenuItem fontSize={"xs"}>Source For You</MenuItem>
          </Link>
          <Link href={"/calculator"}>
            <MenuItem fontSize={"xs"}>Calculator</MenuItem>
          </Link>
          <Link href={"/catalog-list"}>
            <MenuItem fontSize={"xs"}>Catalog</MenuItem>
          </Link>
          <Link href={"/quiz-onboarding"}>
            <MenuItem fontSize={"xs"}>On Boarding Quiz</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} gap={1} bg="none" variant="none" h={7}>
          <Flex alignItems="center" gap={1} justifyContent={"center"}>
            <Avatar size="sm" name="" src="" />
            <Icon as={ChevronDownIcon} color={"black"} fontSize={"2xl"} />
          </Flex>
        </MenuButton>
        <MenuList pt={0} borderRadius={"lg"}>
          <Box bg={"rgba(255, 214, 0)"} borderTopRadius={"lg"} p={4}>
            <Text fontWeight={"bold"}>Username</Text>
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={2}>
              <Icon as={BsDropbox} />
              <Text>Subscription</Text>
            </Flex>
          </Box>
          <Link href={"/profile"}>
            <MenuItem fontSize={"xs"}>Profile</MenuItem>
          </Link>
          <Link href={"/order"}>
            <MenuItem fontSize={"xs"}>Order</MenuItem>
          </Link>
          <Link href={"/invoice"}>
            <MenuItem fontSize={"xs"}>Invoice</MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem fontSize={"xs"}>Contact Us</MenuItem>
          </Link>
          <Divider />
          <Link href={"/login"} onClick={userSignOut}>
            <MenuItem fontSize={"xs"}>Sign Out</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default HeaderLogin;
