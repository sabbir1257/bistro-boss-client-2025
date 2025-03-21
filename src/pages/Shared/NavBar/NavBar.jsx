import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinkClasses =
    "block px-3 py-2 font-bold text-white rounded-sm hover:text-[#D99904] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D99904] md:p-0 dark:text-white md:dark:hover:text-[#D99904] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/order", label: "Order" },
    { path: "/contact_us", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="flex flex-wrap items-center text-white justify-between max-w-[1280px] mx-auto p-4 bg-black bg-opacity-30">
        <a
          href="/"
          className="flex items-center space-x-3 text-[32px] font-black"
        >
          Bistro Boss
        </a>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
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
          <ul className="flex flex-col items-center p-4 mt-4 font-medium border rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navOptions.map((option) => (
              <li key={option.path}>
                <NavLink to={option.path} className={navLinkClasses}>
                  {option.label}
                </NavLink>
              </li>
            ))}

            {/* Conditional rendering for user */}
            <li>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-white bg-gray-800 hover:bg-[#D99904] rounded-lg text-sm px-5 py-2.5 me-2 mb-2"

                >
                  LogOut
                </button>
              ) : (
                <NavLink to="/login" className={navLinkClasses}>
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
