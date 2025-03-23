import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
