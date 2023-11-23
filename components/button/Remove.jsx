'use client'

import { useCart } from '@/context/CartContext';
import { TiDeleteOutline } from 'react-icons/ti'
import { Button, useToast } from '@chakra-ui/react'
import { useWishlist } from '@/context/WishlistContext';
const RemoveProduct = ({product_id}) => {
    const {removeFromCart} = useCart();
    const {removeFromWishlist} = useWishlist();
    const toast = useToast();

    const handleRemove = () => {
        removeFromCart(product_id) || removeFromWishlist(product_id)
        console.log("product_id", product_id)

        toast({
            title: "Removed Product",
            description: "Product has been removed",
            status: "error",
            duration: 3000,
            isClosable: true,
        })
    }
  return (
    <Button onClick={handleRemove} variant={'none'}>
        <TiDeleteOutline color='red' size={25}/>
    </Button>
  )
}

export default RemoveProduct