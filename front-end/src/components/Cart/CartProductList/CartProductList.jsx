import { CenteredContent } from "../../Common/CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "./CartProductList.module.css";

export function CartProductList({ cartProducts }) {
  return (
    <CenteredContent>
      <div className={styles.list}>
        <h2>Koszyk</h2>
        <div>
          {cartProducts.map((cartProduct) => {
            return (
              <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
