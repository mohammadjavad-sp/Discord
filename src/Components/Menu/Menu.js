"use client";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logoPic from "../../Assets/images/header/logo.svg";
const Menu = () => {
  const theme = {
    root: {
      base: "bg-white px-[40px] xl:px-[70px] py-2.5 dark:border-gray-700 dark:bg-gray-800 ",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full lg:block lg:w-auto",
      list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 lg:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white lg:bg-transparent lg:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-cyan-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  };
  return (
    <Navbar className="bg-transparent !py-7 " theme={theme}>
      <Link to="/">
        <img src={logoPic} className=" h-9" />
      </Link>
      <div className="flex lg:order-2 font-GrintoBold cursor-pointer">
        <Link
          to="/Login"
          className="px-3 py-2 text-[15px] bg-white hover:text-[#404EED] rounded-full"
        >
          Login
        </Link>
        <Navbar.Toggle className="text-white !ms-1 !block lg:!hidden !bg-transparent !ring-0" />
      </div>

      <Navbar.Collapse className="border-2 lg:border-0  rounded-xl p-5 lg:p-0 mt-5 lg:mt-0">
        <Link
          to="/Download"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Download
        </Link>
        <Link
          to="/Nitro"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Nitro
        </Link>
        <Link
          to="/Discover"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Discover
        </Link>
        <Link
          to="/Safety"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Safety
        </Link>
        <Link
          to="/Support"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Support
        </Link>
        <Link
          to="/Blog"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Blog
        </Link>
        <Link
          to="/Careers"
          className="!text-white text-[16px] px-2 !bg-transparent py-3 lg:py-0 cursor-pointer hover:underline"
        >
          Careers
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
