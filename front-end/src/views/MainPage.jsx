import { useLoaderData } from "react-router-dom";
import { Bestsellers } from "../components/MainPage/Bestsellers/Bestsellers";
import { HeroBanner } from "../components/MainPage/HeroBanner/HeroBanner";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <HeroBanner heroImage={heroImageUrl} />
      <Bestsellers products={bestsellers} />
    </>
  );
}
