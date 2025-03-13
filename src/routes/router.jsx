import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "./AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element: <h1>Login component</h1>
      },
      {
        path:"/auth/register",
        element: <h1>Register Components</h1>
      }
    ]
  },
  {
    path: "news",
    element: <h1>Newssssss</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
