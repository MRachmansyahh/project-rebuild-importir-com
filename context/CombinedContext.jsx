import { CartProvider } from "./CartContext"; // Import your existing context providers
import { WishlistProvider } from "./WishlistContext";
import { SearchProvider } from "./SearchContext";

const CombinedContext = ({ children }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>{children}</SearchProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default CombinedContext;
