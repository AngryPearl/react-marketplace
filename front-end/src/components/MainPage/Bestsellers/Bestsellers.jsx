import { CenteredContent } from "../../Common/CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import styles from "./Bestsellers.module.css";

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2 className={styles.header}>Sprawdź nasze bestellery</h2>
      <div className={styles.bestsellers}>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </CenteredContent>
  );
}
