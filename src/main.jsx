import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/MainRoutes.jsx";

import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProviders>
);
