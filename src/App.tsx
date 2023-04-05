import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "Contact", element: <ContactPage /> },
      { path: "About", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
