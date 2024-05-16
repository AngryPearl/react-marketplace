import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../components/Favourites/FavouritesList/FavouritesList";

export function Favourites() {
  const favourites = useLoaderData();

  return <FavouritesList favourites={favourites} />;
}
