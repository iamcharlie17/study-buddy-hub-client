import { Outlet } from "react-router-dom";
import Nav from "../Shared/NavFooter/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
