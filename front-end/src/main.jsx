import "./styles/theme.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage.jsx";
import { Favourites } from "./views/Favorites.jsx";
import { Cart } from "./views/Cart.jsx";
import { ProductsList } from "./views/ProductsList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/catalog",
    element: <ProductsList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
