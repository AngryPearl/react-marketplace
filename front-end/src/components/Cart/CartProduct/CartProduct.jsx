import REMOVE_ICON from "../../../assets/remove.svg";
import { ProductPrice } from "../../Common/ProductPrice/ProductPrice";
import styles from "./CartProduct.module.css";

export function CartProduct({ cartProduct }) {
  return (
    <div className={styles.product}>
      <img src={cartProduct.photos[0]} alt="" />
      <div className={styles.productInfo}>
        <div className={styles.detailsHeader}>
          <h3>
            {cartProduct.brand} {cartProduct.productName}
          </h3>
          <p>
            <ProductPrice product={cartProduct} />
          </p>
        </div>
        <p className={styles.detailsPrice}>
          <span>Cena: </span>
          <ProductPrice product={cartProduct} />
        </p>
        <div className={styles.detailsButtons}>
          <button>
            <img src={REMOVE_ICON} alt="" />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
