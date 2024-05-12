import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   const location = useLocation()
//   console.log(location);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="loading text-[#0f80de] w-24 loading-dots "></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
