import React from "react";
import { Outlet } from "react-router";

const RootLayOut = () => {
  return (
    <>
      <div className="flex gap-5">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayOut;