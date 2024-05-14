import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, isBlack }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.fullWidthButton} ${isBlack ? styles.black : ""}`}
    >
      {children}
    </button>
  );
}
