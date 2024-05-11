import { Link } from "react-router-dom";
import bannerBird from "../../../assets/images/banner-bird.png";
import { FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[80vh]">
      <div className=" bg-[#0f80de] pt-24 md:pt-36 lg:pt-16 text-center lg:text-start">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-10 ">
          <div className="text-white flex flex-col justify-center space-y-8">
            <h1 className=" text-2xl md:text-5xl font-bold">
              Professional assignment help <br />
              you’ve left to the last minute
            </h1>
            <div className="flex justify-center lg:justify-start">
              <ul>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Outstanding customer support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  24/7 expert assignment help
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Plagiarism-FREE guarantee
                </li>
              </ul>
            </div>
            <div className=" lg:w-1/2 lg:text-center">
              <Link to={"/assignments"}>
                <button className="bg-yellow-400 lg:w-full  font-bold px-4 py-2 text-xl text-[#0f80de] rounded-lg  shadow-sm hover:text-white hover:bg-yellow-300 border-none">
                  Get Assignment Help
                </button>
              </Link>
              <p>
                <small>AI & plagarism free</small>
              </p>
            </div>
          </div>

          <img className=" md:h[50vh] lg:h-[80vh]  " src={bannerBird} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
