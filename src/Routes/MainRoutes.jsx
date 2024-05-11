import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/HomePage/Home";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignments from "../Pages/Assignments/CreateAssignments";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/assignments",
          element: <Assignments/>
        },
        {
          path: "/create-assignments",
          element: <PrivateRoute><CreateAssignments/></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
  ]);

export default router;