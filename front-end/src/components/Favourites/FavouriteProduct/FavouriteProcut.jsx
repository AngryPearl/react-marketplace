import styles from "./FavouriteProduct.module.css";
import BAG_ICON from "../../../assets/clearBag.svg";
import REMOVE_ICON from "../../../assets/remove.svg";

export function FavouriteProduct({ favourite }) {
  return (
    <div className={styles.product}>
      <img src={favourite.photos[0]} alt="" />
      <div className={styles.productInfo}>
        <div className={styles.detailsHeader}>
          <h3>
            {favourite.brand} {favourite.productName}
          </h3>
          <p>{favourite.pricePLN}zł</p>
        </div>
        <p className={styles.detailsPrice}>
          <span>Cena: </span>
          {favourite.pricePLN}zł
        </p>
        <div className={styles.detailsButtons}>
          <button>
            <img src={REMOVE_ICON} alt="" />
            Usuń
          </button>
          <button>
            <img src={BAG_ICON} alt="" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
