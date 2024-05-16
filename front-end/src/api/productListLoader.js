import { redirect } from "react-router-dom";
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { gender, category, subcategory },
}) {
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  if (foundCategory && foundGender) {
    let url = `${BACKEND_URL}/products?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }
    return fetch(url);
  } else {
    return redirect("/kobieta");
  }
}
