import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, isBlack, isInverted }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.fullWidthButton} ${isBlack ? styles.black : ""}
       ${isInverted ? styles.inverted : ""}`}
    >
      {children}
    </button>
  );
}
