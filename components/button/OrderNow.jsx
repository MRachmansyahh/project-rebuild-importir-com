import { Button, Text} from "@chakra-ui/react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const OrderNow = ({ product_id }) => {
  return (
    <Link href={`/product/${product_id}`}>
      <Button variant="solid" colorScheme="green" w="100%">
        <FiShoppingCart/>
        <Text ms={4}>Order Now</Text>
      </Button>
    </Link>
  );
};

export default OrderNow;
