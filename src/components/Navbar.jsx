import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import ThemeContext from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);

  const { user, logout } = useContext(AuthContext);

  // Check if the pathname is not defined in your routes
  const isWildcardPath =
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/blog" &&
    pathname !== "/contact" &&
    !pathname.startsWith("/blog/");

  const isAuthPage = pathname === "/login" || pathname === "/register";
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  console.log(pathname);
  return (
    <nav className="absolute w-full top-3 drop-shadow-2xl flex justify-around  px-10 items-center">
      <ul className="flex justify-between w-full text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <>
          {/* renders elements if not in auth page like login and register */}
          {!isAuthPage ? (
            <>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>{" "}
            </>
          ) : null}
          <div className="flex gap-6 justify-center items-center">
            {user ? (
              <li>
                <Link to="/register">
                  <button
                    className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">
                    <button className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                      Register
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            )}
          </div>
        </>
      </ul>
      <span
        className={`${isWildcardPath ? "text-white bg-white" : "text-black"} `}
        onClick={handleClick}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode className="" />}
      </span>
    </nav>
  );
};

export default Navbar;
