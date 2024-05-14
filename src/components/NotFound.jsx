import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/404.jpg"

const NotFound = () => {
    return (
        <div className="min-h-screen text-center">
            <img className="w-2/3 mx-auto" src={notFoundImg} alt="" />
            <Link to={'/'}>
                <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;