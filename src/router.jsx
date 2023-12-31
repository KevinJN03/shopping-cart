import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";



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

    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
