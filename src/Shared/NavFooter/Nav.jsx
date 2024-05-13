import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { CgProfile } from "react-icons/cg";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [theme, setTheme] = useState("light");
  //theme control
  document.querySelector("html").setAttribute("data-theme", theme);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Logout successful",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: `${err.message}`,
        });
      });
  };

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // console.log(theme);

  const navLinks = (
    <>
      <li>
        <NavLink className={"font-bold"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-bold"} to="/assignments">
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-bold"} to="/create-assignments">
          Create Assignments
        </NavLink>
      </li>
      {
        user && <li>
        <NavLink className={"font-bold"} to="/my-assignments">
          My Assignments
        </NavLink>
      </li>
      }
      {
        user && <li>
        <NavLink className={"font-bold"} to="/pending-assignments">
          Pending Assignments
        </NavLink>
      </li>
      }
    </>
  );

  return (
    <div className="navbar bg-[#0f80de] text-white fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col items-center -space-y-2">
          <Link to={"/"} className="text-2xl font-bold">
            Study<span className="text-yellow-400">Buddy</span>Hub
          </Link>
          <p>
            <small>Writing platform</small>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              onClick={handleToggleTheme}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="m-1">
              <CgProfile size={35} />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content bg-[#045281] text-center space-y-4 z-[1] menu p-2 shadow rounded-box w-52"
            >
              <h1>{user?.displayName}</h1>
              <div className="w-full flex justify-center">
                <button
                  onClick={handleLogout}
                  className="bg-yellow-400 w-1/2 text-[#0f80de] rounded-xl shadow-blue-600 shadow-sm hover:text-white hover:bg-yellow-300 "
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-yellow-400 font-bold md:px-4 px-2 py-1 md:py-2 md:text-xl text-[#0f80de] rounded-xl shadow-blue-600 shadow-sm hover:text-white hover:bg-yellow-300 ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
