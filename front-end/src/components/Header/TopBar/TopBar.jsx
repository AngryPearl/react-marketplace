import styles from "./TopBar.module.css";

function TopBar({ children }) {
  return <div className={styles.topBar}> {children}</div>;
}

export default TopBar;
