import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/HomePage/Home";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignments from "../Pages/Assignments/CreateAssignments";

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
          element: <CreateAssignments/>
        }
      ]
    },
  ]);

export default router;