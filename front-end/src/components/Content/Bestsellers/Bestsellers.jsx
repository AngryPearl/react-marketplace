import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import styles from "./Bestsellers.module.css";

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2>Sprawdź nasze bestellery</h2>
      <div className={styles.bestsellers}>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </CenteredContent>
  );
}
