import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/images/header/logo.svg";
import hamber from "../../Assets/images/header/hamberger.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="text-white bg-transparent pt-3 z-[999] ">
      <div className="max-w-screen-xl px-[50px] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/discord/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" />
        </Link>
        <div className="flex lg:order-2">
          <NavLink
            to="/discord/Login"
            type="button"
            className="text-black font-bold bg-white hover:text-[#404EED] rounded-full text-sm px-4 py-2 text-center hidden sm:block hover:shadow-lg"
          >
            Login
          </NavLink>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-14 h-10  lg:hidden translate-y-[-4px] overflow-hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <img src={hamber} className="w-10 " />
          </button>
        </div>

        <div
          className="items-center justify-between hidden  w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 gap-3 lg:flex-row lg:mt-0 lg:border-0 ">
            <li>
              <Link
                to="/discord/Download"
                className="block py-2 px-3 md:p-0  rounded hover:underline text-white"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Nitro"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Nitro
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Discover"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Safety"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Safety
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Support"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Blog"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/discord/Careers"
                className="block py-2 px-3 md:p-0  rounded hover:underline  text-white "
              >
                Careers
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block bg-blue-200  py-2 px-3 md:p-0 hover:underline sm:hidden text-black text-center rounded-full "
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
