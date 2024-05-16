import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { BACKEND_URL } from "../constants/api";

export function mainPageLoader({ params }) {
  const backendPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
  if (backendPath) {
    return fetch(`${BACKEND_URL}/${backendPath}`);
  } else {
    return redirect("/kobieta");
  }
}
