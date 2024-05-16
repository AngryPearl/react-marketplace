import { NavLink, useParams } from "react-router-dom";
import { PATH_TO_GENDER_NAME } from "../../../constants/api";
import { CATEGORIES } from "../../../constants/categories";
import ARROW from "./../../../assets/arrowUp.svg";
import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const params = useParams();

  return (
    <div className={styles.expandableMenu}>
      <p>{PATH_TO_GENDER_NAME[params.gender]}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
                {category.categoryName}
                <img
                  src={ARROW}
                  alt="arrow up/down"
                  className={
                    params.category === category.path ? styles.expanded : ""
                  }
                />
              </NavLink>
              {category.path === params.category && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink
                          to={`/${params.gender}/${category.path}/${subcategory.path}`}
                        >
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
