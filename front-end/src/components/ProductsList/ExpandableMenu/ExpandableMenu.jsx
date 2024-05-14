import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../../constants/categories";
import ARROW from "./../../../assets/arrowUp.svg";
import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const activePath = "odziez";

  return (
    <div className={styles.expandableMenu}>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.categoryName}
                <img
                  src={ARROW}
                  alt="arrow up/down"
                  className={
                    activePath === category.path ? styles.expanded : ""
                  }
                />
              </NavLink>
              {category.path === activePath && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink to={subcategory.path}>
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
