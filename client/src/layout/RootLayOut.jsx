import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/cart";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Cart className="fixed top-1/2 right-3 transform -translate-y-1/2 z-50" />
      <Footer />
    </div>
  );
};

export default RootLayOut;
