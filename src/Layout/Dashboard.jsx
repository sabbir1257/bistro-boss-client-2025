import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <div className="md:w-64">
        <Sidebar />
      </div>
      <div className="flex-1 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;