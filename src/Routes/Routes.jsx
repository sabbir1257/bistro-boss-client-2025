import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
<<<<<<< HEAD
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Deshboard/Users/Cart/Cart";
import AllUsers from "../pages/Deshboard/Admin/AllUsers/AllUsers";
=======
import Cart from "../pages/Deshboard/Cart/Cart";
import Review from "../pages/Deshboard/Review/Review";
import AllUsers from "../pages/Deshboard/Admin/AllUser";
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      }, // ✅ Dynamic route
      {
        path: "/order",
        element: <Order />,
      }, // Default order page
      {
        path: "/contact_us",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
<<<<<<< HEAD
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // Admin routes
      {
        path: 'allUsers',
        element: <AllUsers/>
      },
      // user routes
=======
    element: <Dashboard />,
    children: [
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177
      {
        path: "cart",
        element: <Cart />,
      },
<<<<<<< HEAD
=======
      {
        path: 'review',
        element: <Review/>
      },
      {
        path: 'allUsers',
        element: <AllUsers/>
      }
>>>>>>> 40a0ed2a1c8126e2dda488b513ffd2d279b8a177
    ],
  },
]);

export { router };
