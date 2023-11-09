import { Button } from "@chakra-ui/react"
import { useCart } from "@/context/CartContext"

const AddToCartButton = ({product}) => {
    const { addToCart } = useCart()

  return (
    <Button onClick={() => addToCart(product)} h={6} fontSize={"sm"} bg={"rgb(255, 214, 0)"}>Add To Cart</Button>
  )
}

export default AddToCartButton