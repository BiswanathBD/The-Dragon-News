import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Error404 from "../Pages/Error/Error404";
import { Component } from "react";
import NewsSection from "../layouts/NewsSection";
import NewsDetails from "../Pages/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        Component: Homepage,
        loader: () => fetch("/news.json"),
        children: [
          {
            path: "/category/:id",
            Component: NewsSection,
          },
        ],
      },

      {
        path: "/details/:newsId",
        loader: () => fetch("/news.json"),
        Component: NewsDetails,
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
