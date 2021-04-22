import notFoundPNG from "../../IMAGES/taxi-page-not-found-1.png";
import { NavLink } from "react-router-dom";

const PageNotFound = ({ user }) => {
  return (
    <div className="w-full flex flex-col justify-evenly text-center bg-gray-200 bg-opacity-70 h-screen">
      <h2 className="sm:text-5xl text-4xl font-medium">Oops! Page not found</h2>
      <img className="mx-auto h-1/2" src={notFoundPNG} alt="" />
      <h2 className="sm:text-4xl text-2xl font-medium text-gray-600">
        We could not find the page you are looking for
      </h2>
      <NavLink to={user ? "/homepage" : "/sign-in"}>
        <button className="text-2xl font-medium bg-yellow-200 w-max mx-auto px-5 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all focus:outline-none">
          {user ? "GO BACK HOME" : "GO TO LOGIN PAGE"}
        </button>
      </NavLink>
    </div>
  );
};

export default PageNotFound;
