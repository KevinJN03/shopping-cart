import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import SingleProduct from "./Components/Shop/SingleProduct";
import Body from "./Components/Body";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <App />,
    },
    { path: "/shop/:id", element: <App /> },

    // { path: "/shop/cart", element: <App /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
