import { createBrowserRouter, Router } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import AuthLayout from './../Layouts/AuthLayout';
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "../Context/PrivateRoutes";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading></Loading>
        }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes> ,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);

export default router;
