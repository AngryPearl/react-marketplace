import LOGO from "../../../assets/TopSklep.svg";
import styles from "./Logo.module.css";

export default function Logo() {
  return <img className={styles.logo} src={LOGO} alt="Logo alt" />;
}
