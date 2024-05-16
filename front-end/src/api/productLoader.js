import { redirect } from "react-router-dom";
import { BACKEND_URL } from "../constants/api";

export function productLoader({ params }) {
  if (params.productId) {
    return fetch(`${BACKEND_URL}/products/${params.productId}`);
  } else {
    return redirect("/kobieta");
  }
}
