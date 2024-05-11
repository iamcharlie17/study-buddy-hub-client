import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
