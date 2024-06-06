import { AiOutlineSearch } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar pl-0  lg:p-4 text-gray-900 flex flex-col lg:flex-row justify-center items-center">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="hidden lg:flex  ml-20 navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end pr-12 flex  flex-row sm: justify-between lg:justify-end">
        <div className="form-control pr-10 relative ">
          <input
            type="text"
            placeholder="search"
            className="input pl-10 rounded-3xl focus:outline-none border-2 border-gray-200 bg-gray-200  w-56 md:w-auto text-black mx-auto "
          />
          <div className="absolute left-5 mt-11 lg:left-3 top-1/2 transform -translate-y-1/2 mr-2">
            <AiOutlineSearch className="w-5 text-gray-500" />
          </div>
        </div>
        <div className="rounded-full inline mt-3">
          <p className="inline">
            <FaRegCircleUser className="text-emerald-500 w-8 h-8" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
