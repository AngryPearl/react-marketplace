import styles from "./CartSummary.module.css";
import CAR from "../../../assets/car.svg";
import { FullWidthButton } from "../../MainPage/FullWidthButton/FullWidthButton";

export function CartSummary({ cartProducts }) {
  const minValueForFreeDelivery = 500;
  const sum = cartProducts.reduce((accumulator, cartProduct) => {
    return (accumulator += cartProduct.pricePLN);
  }, 0);

  let deliveryCost = sum < minValueForFreeDelivery ? 49 : 0;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.priceSummary}>
        <div className={styles.cartRow}>
          <p>Wartość produktów:</p>
          <p>{sum}zł</p>
        </div>
        <div className={styles.cartRow}>
          <p>Koszt dostawy:</p>
          <p>{deliveryCost}zł</p>
        </div>
        <div className={`${styles.cartRow} ${styles.carRowSummary}`}>
          <p>Do zapłaty:</p>
          <p>{sum + deliveryCost}zł</p>
        </div>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryBox}>
        <img src={CAR} alt="car" />
        <span>Darmowa dostawa od {minValueForFreeDelivery}zł</span>
      </div>
    </div>
  );
}
