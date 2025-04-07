import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  FaHome,
  FaTimes,
  FaBars,
  FaCartArrowDown,
  FaRegCalendarAlt,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { MdAddBox, MdOutlineReviews, MdPayments } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import useCart from "../../../HOOKS/useCart";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [cart] = useCart();
  // TODO: get isAdmion valyue from database
  const isAdmin = true;

  const navLinks = isAdmin
    ? [
        { to: "/dashboard/adminHome", label: "Admin Home", icon: <FaHome /> },
        { to: "/dashboard/addItems", label: "Add Items", icon: <MdAddBox /> },
        {
          to: "/dashboard/manageItems",
          label: "Manage Items",
          icon: <FaClipboardList />,
        },
        {
          to: "/dashboard/manageBookings",
          label: "Manage Bookings",
          icon: <FaClipboardList />,
        },
        { to: "/dashboard/allUsers", label: "All Users", icon: <FaUsers /> },
      ]
    : [
        { to: "/dashboard/userHome", label: "User Home", icon: <FaHome /> },
        {
          to: "/dashboard/reservation",
          label: "Reservation",
          icon: <FaCalendarDays />,
        },
        {
          to: "/dashboard/paymentHistory",
          label: "Payment History",
          icon: <MdPayments />,
        },
        {
          to: "/dashboard/cart",
          label: `My Cart (${cart.length})`,
          icon: <FaCartArrowDown />,
        },
        {
          to: "/dashboard/review",
          label: "Add Review",
          icon: <MdOutlineReviews />,
        },
        {
          to: "/dashboard/booking",
          label: "My Booking",
          icon: <FaRegCalendarAlt />,
        },
      ];

  const additionalLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/menu", label: "Menu", icon: <FaBars /> },
    { to: "/shop", label: "Shop", icon: <FaCartArrowDown /> },
    { to: "/contact", label: "Contact", icon: <FaRegCalendarAlt /> },
  ];

  return (
    <div className="">
      <div
        className={clsx(isOpen ? "block" : "hidden", "md:block fixed inset-0")}
        onClick={toggleSidebar}
      ></div>

      <div
        className={clsx(
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:flex md:flex-col md:w-64 w-64 bg-[#D1A054] text-black fixed h-full transition-transform duration-300 z-50"
        )}
      >
        <div className="p-4 text-2xl font-bold text-black">Dashboard</div>

        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  "flex items-center px-4 py-2 text-black uppercase rounded hover:text-white hover:bg-gray-700",
                  isActive && "bg-gray-600 text-white"
                )
              }
            >
              <span className="mr-3">{icon}</span>
              {label}
            </NavLink>
          ))}

          <hr className="my-4 border-t border-black" />

          {additionalLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  "flex items-center px-4 py-2 text-black uppercase rounded hover:text-white hover:bg-gray-700",
                  isActive && "bg-gray-600 text-white"
                )
              }
            >
              <span className="mr-3">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

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
    </div>
  );
};

export default Sidebar;
