import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  FaHome,
  FaCog,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
  FaTimes,
  FaBars,
  FaCartArrowDown,
} from "react-icons/fa"; // Importing icons from react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Memoize the list of links with icons
  const navLinks = useMemo(
    () => [
      { to: "dashboard/cart", label: "My Cart", icon: <FaCartArrowDown /> },
      { to: "/", label: "Home", icon: <FaHome /> },
      { to: "/settings", label: "Settings", icon: <FaCog /> },
      { to: "/users", label: "Users", icon: <FaUsers /> },
      { to: "/reports", label: "Reports", icon: <FaChartBar /> },
      { to: "/logout", label: "Logout", icon: <FaSignOutAlt /> },
    ],
    []
  );

  return (
    <div className="flex">
      {/* Sidebar Overlay */}
      <div
        className={clsx(
          isOpen ? "block" : "hidden",
          "md:block fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
        )}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={clsx(
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:flex md:flex-col md:w-64 w-64 bg-[#D1A054] text-black fixed h-full transition-transform duration-300 z-50"
        )}
      >
        {/* Sidebar header */}
        <div className="p-4 text-2xl font-bold text-black">
          <span>Dashboard</span>
        </div>

        {/* Sidebar links */}
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className="flex items-center px-4 py-2 text-black rounded hover:text-white hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              <span className="mr-3">{icon}</span> {/* Render the icon here */}
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button (Hamburger icon for mobile) */}
      <button
        className={clsx(
          "md:hidden p-4 fixed top-0 left-0 z-50",
          isOpen ? "text-white" : "text-[#D1A054]"
        )}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <div className="absolute text-black top-4 left-48 hover:text-white md:hidden">
            <FaTimes className="w-6 h-6" />
          </div>
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Content */}
      <div className="flex-1 p-6 ">
        <h1 className="text-2xl font-bold">Main Content</h1>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Sidebar;
