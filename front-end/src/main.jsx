import "./styles/globals.css";
import "./styles/theme.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
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
        path: "/:gender?",
        loader: mainPageLoader,
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
        path: "/:gender/:category/:subcategory?",
        loader: productListLoader,
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
