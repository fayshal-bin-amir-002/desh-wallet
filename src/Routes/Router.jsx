import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Login from "../pages/Login";
import Overviews from "../pages/Overviews";
import Transitions from "../pages/Transitions";
import SendMoney from "../pages/SendMoney";
import CashIn from "../pages/CashIn";
import CashOut from "../pages/CashOut";
import UserManagements from "../pages/UserManagements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/overviews",
        element: <PrivateRoute><Overviews></Overviews></PrivateRoute>
      },
      {
        path: "/transitions",
        element: <PrivateRoute><Transitions></Transitions></PrivateRoute>
      },
      {
        path: "/sendMoney",
        element: <PrivateRoute><SendMoney></SendMoney></PrivateRoute>
      },
      {
        path: "/cashIn",
        element: <PrivateRoute><CashIn></CashIn></PrivateRoute>
      },
      {
        path: "/cashOut",
        element: <PrivateRoute><CashOut></CashOut></PrivateRoute>
      },
      {
        path: "/user-managements",
        element: <AdminRoute><UserManagements></UserManagements></AdminRoute>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

export default router;