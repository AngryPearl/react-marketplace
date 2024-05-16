import { useLoaderData } from "react-router-dom";
import { HeroBanner } from "../components/MainPage/HeroBanner/HeroBanner";
import { Products } from "../components/ProductsList/Products/Products";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <HeroBanner heroImage={heroImageUrl} />
      <Products
        products={bestsellers}
        headerText={"Sprawdź nasze bestellery"}
      />
    </>
  );
}
