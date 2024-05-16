import { redirect } from "react-router-dom";
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { gender, category, subcategory },
  request,
}) {
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get("page") || 1;

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

    url = `${url}&_limit=8&_page=${page}`;

    return fetch(url).then((response) => {
      const numberOfPages = Math.ceil(
        Number(response.headers.get("X-Total-Count")) / 8
      );

      return response.json().then((products) => {
        return {
          products,
          numberOfPages,
        };
      });
    });
  } else {
    return redirect("/kobieta");
  }
}
