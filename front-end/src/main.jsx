import "./styles/globals.css";
import "./styles/theme.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { Cart } from "./views/Cart.jsx";
import { Favourites } from "./views/Favorites.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { ProductDetails } from "./views/ProductDetails.jsx";
import { ProductsList } from "./views/ProductsList.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
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
      {
        path: "/product",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
