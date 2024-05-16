import { BACKEND_URL } from "../constants/api";

export function deleteProductFromFavouritesAction({ params }) {
  return fetch(`${BACKEND_URL}/favourites/${params.productId}`, {
    method: "DELETE",
  });
}
