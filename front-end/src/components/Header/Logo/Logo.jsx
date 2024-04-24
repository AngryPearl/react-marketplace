import LOGO from "../../../assets/TopSklep.svg";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LOGO} alt="Logo alt" />
    </div>
  );
}
