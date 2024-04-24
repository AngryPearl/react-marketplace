import styles from "./CustomerControls.module.css";
export default function CustomerControls({ children }) {
  return <div className={styles.customerControls}>{children}</div>;
}
