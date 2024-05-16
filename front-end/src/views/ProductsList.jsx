import { useLoaderData, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Common/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../components/Common/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../components/Common/FlexContainer/FlexContainer";
import { Pagination } from "../components/ProductsList/Pagination/Pagination";
import { Products } from "../components/ProductsList/Products/Products";
import { CATEGORIES } from "../constants/categories";

export function ProductsList() {
  const products = useLoaderData();
  const params = useParams();
  const foundCategory = CATEGORIES.find((c) => c.path === params.category);
  let foundSubcategory;
  if (params.subcategory) {
    foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === params.subcategory
    );
  }

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          products={products}
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
        />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
}
