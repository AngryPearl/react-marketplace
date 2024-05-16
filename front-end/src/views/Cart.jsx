import { useContext } from "react";
import { CartProductList } from "../components/Cart/CartProductList/CartProductList";
import { CartSummary } from "../components/Cart/CartSummary/CartSummary";
import { FlexContainer } from "../components/Common/FlexContainer/FlexContainer";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const [cartItems] = useContext(CartContext);

  return (
    <FlexContainer>
      <CartProductList cartProducts={cartItems} />
      <CartSummary cartProducts={cartItems} />
    </FlexContainer>
  );
}
