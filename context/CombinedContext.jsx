import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

const CombinedContext = ({ children }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
};

export default CombinedContext;
