'use client'

import { useWishlist } from "@/context/WishlistContext";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";



export default function WishlistButton({product}) {
    const { addToWishlist } = useWishlist()
    const toast = useToast()
    const [isAdded, setIsAdded] = useState(false)

    const handleWishlist = () => {
        addToWishlist(product)
        console.log("Added to wishlist:", product);

        toast({
            title: "Added to wishlist",
            description: "Product has been added to the wishlist",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
        setIsAdded(true)
    }

    return (
        <Button onClick={handleWishlist} variant={"none"}>
            <AiFillHeart color={isAdded ? "red" : "black"} />
        </Button>
    )
}