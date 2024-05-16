import { BACKEND_URL } from "../constants/api";

export function addProductToFavouritesAction({ params }) {
  return fetch(`${BACKEND_URL}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: Number(params.productId),
    }),
  });
}
