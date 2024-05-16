import "./styles/globals.css";
import "./styles/theme.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction.js";
import { deleteProductFromFavouritesAction } from "./api/deleteProductFromFavouritesAction.js";
import { favouritesLoader } from "./api/favouritesLoader.js";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
import { productLoader } from "./api/productLoader.js";
import Layout from "./components/Layout/Layout.jsx";
import { Cart } from "./views/Cart.jsx";
import { Favourites } from "./views/Favorites.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { ProductDetails } from "./views/ProductDetails.jsx";
import { ProductsList } from "./views/ProductsList.jsx";

const router = createBrowserRouter([
  {
    path: "/add-to-favoritues/:productId",
    action: addProductToFavouritesAction,
  },
  {
    path: "/delete-from-favoritues/:productId",
    action: deleteProductFromFavouritesAction,
  },
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
        loader: favouritesLoader,
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
        path: "/:gender/:category/:subcategory/:productId",
        loader: productLoader,
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
