import { useContext } from "react";
import { useFetcher } from "react-router-dom";
import BAG_ICON from "../../../assets/clearBag.svg";
import REMOVE_ICON from "../../../assets/remove.svg";
import { CartContext } from "../../../contexts/CartContext";
import { ProductPrice } from "../../Common/ProductPrice/ProductPrice";
import styles from "./FavouriteProduct.module.css";

export function FavouriteProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();
  const [, addProductToCart] = useContext(CartContext);

  return (
    <div className={styles.product}>
      <img src={product.photos[0]} alt="" />
      <div className={styles.productInfo}>
        <div className={styles.detailsHeader}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>
            <ProductPrice product={product} />
          </p>
        </div>
        <p className={styles.detailsPrice}>
          <span>Cena: </span>
          <ProductPrice product={product} />
        </p>
        <div className={styles.detailsButtons}>
          <Form
            action={`/delete-from-favoritues/${favourite.id}`}
            method="DELETE"
          >
            <button>
              <img src={REMOVE_ICON} alt="" />
              Usuń
            </button>
          </Form>
          <button
            onClick={() => {
              addProductToCart(product);
            }}
          >
            <img src={BAG_ICON} alt="" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
