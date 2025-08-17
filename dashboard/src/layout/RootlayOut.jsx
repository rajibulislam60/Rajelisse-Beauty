import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

const RootlayOut = () => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootlayOut;
