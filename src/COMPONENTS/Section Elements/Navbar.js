import useClickOutside from "../../HOOKS/useClickOutside";

import SignOut from "../LOGIN/SignOut";

import AddBoxIcon from "@material-ui/icons/AddBox";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  return (
    <div
      ref={ref}
      className="z-10 container mx-auto pt-6 items-center justify-between absolute left-0 right-0 px-4 text-white flex"
    >
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div
          id="hamburger"
          className="w-10 cursor-pointer lg:hidden"
          onClick={() => setIsVisible((prevValue) => !prevValue)}
        >
          <div className="h-1 w-full transition duration-1000 rounded-full bg-yellow-500 my-1"></div>
          <div
            className={`h-1 transition-all delay-100 duration-700 w-4/5 ml-auto rounded-full bg-yellow-500 my-1 ${
              isVisible ? "w-full" : ""
            }`}
          ></div>
          <div
            className={`h-1 transition-all delay-300 duration-700 w-1/2 ml-auto rounded-full bg-yellow-500 my-1 ${
              isVisible ? "w-full" : ""
            }`}
          ></div>
        </div>
        <div
          className={`lg:border-0 lg:flex-row lg:bg-opacity-0 lg:relative lg:w-auto
          flex-col flex transition-all duration-1000 fixed top-0 h-full w-1/3 min-w-30rem border-r-2 border-yellow-500 left-0 bg-black bg-opacity-70 justify-evenly text-2xl items-center
          ${isVisible ? "left-0" : "-left-96 lg:left-0"}`}
        >
          <NavLink
            activeClassName="active-link"
            to="/"
            className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-500 transform hover:scale-105"
          >
            Home <HomeIcon className="ml-1" />
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to="/profile"
            className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-500 transform hover:scale-105"
          >
            Profile <AccountBoxIcon className="ml-1" />
          </NavLink>
          <NavLink
            activeClassName="active-link"
            to="/post"
            className="mx-4 flex items-center lg:mr-8 cursor-pointer transition-all hover:text-yellow-500 transform hover:scale-105"
          >
            Post <AddBoxIcon className="ml-1" />
          </NavLink>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Navbar;