import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/HomePage/Home";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignments from "../Pages/Assignments/CreateAssignments";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";
import MyAssignments from "../Pages/Assignments/MyAssignments";
import UpdateAssignment from "../Pages/Assignments/UpdateAssignment";
import PendingAssignments from "../Pages/Assignments/PendingAssignments";
import AssignmentMarks from "../Pages/Assignments/AssignmentMarks";
import AssignementPreview from "../Pages/Assignments/AssignementPreview";

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
          path: "/assignment-details/:id",
          element: <PrivateRoute><AssignmentDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3200/assignment-details/${params.id}`)
        },
        {
          path: "/create-assignments",
          element: <PrivateRoute><CreateAssignments/></PrivateRoute>
        },
        {
          path: '/update-assignment/:id',
          element: <PrivateRoute><UpdateAssignment/></PrivateRoute>
        },
        {
          path: '/my-assignments',
          element: <PrivateRoute><MyAssignments/></PrivateRoute>
        },
        {
          path: "/pending-assignments",
          element: <PrivateRoute><PendingAssignments/></PrivateRoute>
        },
        {
          path: "/assignment-marks/:id",
          element: <PrivateRoute><AssignmentMarks/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3200/assignment-marks/${params.id}`)
        },
        {
          path: "/assignment-preview/:id",
          element: <PrivateRoute><AssignementPreview/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3200/assignment-marks/${params.id}`)
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