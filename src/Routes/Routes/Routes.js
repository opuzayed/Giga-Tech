import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../CheckOut/CheckOut";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Faq from "../../Pages/FAQ/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Error from "../../Pages/Others/Error/Error";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-opuzayed.vercel.app/news"
          ),
      },

      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-opuzayed.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-opuzayed.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/questions",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-opuzayed.vercel.app/news/${params.id}/`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
