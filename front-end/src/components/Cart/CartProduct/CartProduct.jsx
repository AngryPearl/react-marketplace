import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../../assets/remove.svg";

export function CartProduct({ cartProduct }) {
  return (
    <div className={styles.product}>
      <img src={cartProduct.photos[0]} alt="" />
      <div className={styles.productInfo}>
        <div className={styles.detailsHeader}>
          <h3>
            {cartProduct.brand} {cartProduct.productName}
          </h3>
          <p>{cartProduct.pricePLN}zł</p>
        </div>
        <p className={styles.detailsPrice}>
          <span>Cena: </span>
          {cartProduct.pricePLN}zł
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
