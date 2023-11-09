import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";


export default function WishlistButton({product}) {
    const { wishlist } = useWishlist()

    return (
        <Button onClick={() => wishlist(product)}><FaRegHeart/></Button>
    )
}