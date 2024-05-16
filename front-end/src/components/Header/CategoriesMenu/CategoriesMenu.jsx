import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../../constants/categories";
import styles from "./CategoriesMenu.module.css";

export default function CategoriesMenu() {
  const params = useParams();
  return (
    <div className={styles.categoriesMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => {
          return (
            <li key={path}>
              <NavLink to={`/${params.gender}/${path}`}>{categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
