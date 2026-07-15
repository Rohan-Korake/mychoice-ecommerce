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
import { fetchData, OrdersPage } from "./pages/OrdersPage.jsx";

// routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route loader={fetchData} path="orders" element={<OrdersPage />} />
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
