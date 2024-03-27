import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"
        className={({ isActive }) =>
        isActive ? "active btn btn-outline btn-success mr-2" : "btn btn-ghost mr-2"
      }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/list"
        className={({ isActive }) =>
        isActive ? "active btn btn-outline btn-success mr-2" : "btn btn-ghost mr-2"
      }
      >Listed Books</NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive ? "active btn btn-outline btn-success mr-2" : "btn btn-ghost mr-2"
          }
        >
          Pages To Read
        </NavLink>
      </li>
      <li>
        <NavLink to="/newbooks" className={({ isActive }) =>
            isActive ? "active btn btn-outline btn-success mr-2" : "btn btn-ghost mr-2"
          }>Coming Soon</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) =>
            isActive ? "active btn btn-outline btn-success mr-2" : "btn btn-ghost mr-2"
          }>About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto mb-20">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Worm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#23BE0A] text-white lg:text-xl px-5 rounded-lg mr-4">
          Sign In
        </button>
        <button className="btn bg-[#59C6D2] text-white lg:text-xl px-5 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
