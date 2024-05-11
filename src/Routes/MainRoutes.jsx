import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/HomePage/Home";
import Assignments from "../Pages/Assignments/Assignments";

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
        }
      ]
    },
  ]);

export default router;