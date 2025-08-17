import React from "react";
import { Outlet } from "react-router";

const RootlayOut = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootlayOut;
