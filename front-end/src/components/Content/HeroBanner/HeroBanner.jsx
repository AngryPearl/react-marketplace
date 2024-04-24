import styles from "./HeroBanner.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function HeroBanner({ heroImage }) {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className={styles.heroBanner}
    >
      <CenteredContent>
        <div className={styles.contentWraper}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
