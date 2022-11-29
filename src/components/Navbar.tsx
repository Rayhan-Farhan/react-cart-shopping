import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    {/* We are using outlet to render our child component and links for navigation */}
      <nav className="shadow-md bg-white border-gray-300">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" className="flex items-center">
            <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap">
              Logo
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  to="/customers"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 "
                  aria-current="page"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 "
                  aria-current="page"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 "
                  aria-current="page"
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 "
                  aria-current="page"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
