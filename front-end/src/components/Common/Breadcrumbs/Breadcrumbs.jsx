import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES, GENDERS } from "../../../constants/categories";
import ARROW from "./../../../assets/arrow.svg";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();

  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    {
      categoryName: foundGender.categoryName,
      path: `/${foundGender.path}`,
    },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ];

  let foundSubcategory;
  if (subcategory) {
    foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === subcategory
    );

    breadcrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path} end>
              {breadcrumb.categoryName}
              <img src={ARROW} alt="arrow" />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
