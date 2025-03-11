import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Improvement: The navbar name can be changed from the admin dashboard. */
  const navOptions = (
    <>
      <li>
        <NavLink
          to='/'
          className="block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          aria-current="page"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="block px-3 py-2 text-white rounded-sm hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="block px-3 py-2 text-white rounded-sm hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="block px-3 py-2 text-white rounded-sm hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/"
          className="block px-3 py-2 text-white rounded-sm hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="flex flex-wrap items-center justify-between max-w-[1280px] mx-auto p-4 bg-black bg-opacity-30">
        {/* Improvement: The navbar name can be changed from the admin dashboard. */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-[32px] font-black"
        >
          Bistro Boss
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l15 15M16 1L1 16"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {navOptions}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
