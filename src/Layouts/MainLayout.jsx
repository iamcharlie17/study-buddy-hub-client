import { Outlet } from "react-router-dom";
import Nav from "../Shared/NavFooter/Nav";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
        </div>
    );
};

export default MainLayout;