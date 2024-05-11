import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#0f80de] text-white">
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
        <Link to="/login">
          <button className="bg-yellow-400 font-bold px-4 py-2 text-xl text-[#0f80de] rounded-xl shadow-blue-600 shadow-sm hover:text-white hover:bg-yellow-300 border-none">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
