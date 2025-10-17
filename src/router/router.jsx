import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Error404 from "../Pages/Error/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
    ],
  },
]);
