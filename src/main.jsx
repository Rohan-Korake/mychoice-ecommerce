import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import { getData } from "./utils/orderUtils.js";
import WishListPage from "./pages/WishListPage.jsx";
import { getWishList } from "./utils/wishlistUtils.js";
import ContactPage from "./pages/ContactPage.jsx";

// routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route loader={getData} path="orders" element={<OrdersPage />} />
      <Route loader={getWishList} path="wishlist" element={<WishListPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

// router provider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
