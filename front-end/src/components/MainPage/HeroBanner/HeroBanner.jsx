import styles from "./HeroBanner.module.css";
import { FullWidthButton } from "../../Common/FullWidthButton/FullWidthButton";
import { CenteredContent } from "../../Common/CenteredContent/CenteredContent";

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
