import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../components/Common/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../components/Common/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../components/Common/FlexContainer/FlexContainer";
import { Details } from "../components/ProductDetails/Details/Details";
import { Photos } from "../components/ProductDetails/Photos/Photos";

export function ProductDetails() {
  const product = useLoaderData();

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <FlexContainer>
          <Photos product={product} />
          <Details product={product} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
}
