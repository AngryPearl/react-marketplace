import { Link } from "react-router-dom";
import BAG_ICON from "../../../assets/bag.svg";
import HEART from "../../../assets/heart.svg";
import styles from "./IconMenu.module.css";

export default function IconMenu() {
  const cartItems = 3;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/favourites">
          <img src={HEART} />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img src={BAG_ICON} />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
