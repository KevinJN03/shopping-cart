import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import SingleProduct from "./Components/Shop/SingleProduct";
import Body from "./Components/Body";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <Body />,
    },
    {path: "/shop/:id",
    element: <SingleProduct />,
  },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
