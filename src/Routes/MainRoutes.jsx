import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);

export default router;