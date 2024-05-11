import { Outlet } from "react-router-dom";
import Nav from "../Shared/NavFooter/Nav";
import Footer from "../Shared/NavFooter/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
