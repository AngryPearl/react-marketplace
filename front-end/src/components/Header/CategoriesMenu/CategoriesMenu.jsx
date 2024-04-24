import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../../constants/categories";
import styles from "./CategoriesMenu.module.css";

export default function CategoriesMenu() {
  return (
    <div className={styles.categoriesMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => {
          return (
            <li key={path}>
              <NavLink to={path}>{categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
