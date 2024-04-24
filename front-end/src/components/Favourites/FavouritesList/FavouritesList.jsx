import { CenteredContent } from "../../Common/CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProcut";
import styles from "./FavouritesList.module.css";
export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.list}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => {
            return (
              <FavouriteProduct key={favourite.id} favourite={favourite} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
