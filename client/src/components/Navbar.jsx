import React, { useState } from "react";
import Container from "./Container";
import logoImage from "../images/logo3.png";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="py-2 shadow-sm">
      <Container>
        <div className="flex relative items-center justify-between md:justify-normal md:gap-10">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <img className="w-24 md:w-28" src={logoImage} alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 ml-10">
            <Link to="/">
              <h3 className="uppercase text-lg font-semibold hover:text-[#C09B61]">
                Home
              </h3>
            </Link>
            <Link to="/category">
              <h3 className="uppercase text-lg font-semibold hover:text-[#C09B61]">
                Category
              </h3>
            </Link>
            <Link to="/shop">
              <h3 className="uppercase text-lg font-semibold hover:text-[#C09B61]">
                Shop
              </h3>
            </Link>
          </div>

          {/* Icons - right side for all */}
          <div className="flex gap-4 items-center text-[24px]">
            <IoSearch className="hover:text-[#C09B61] cursor-pointer" />
            <VscAccount className="hover:text-[#C09B61] cursor-pointer" />
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 ">
            <Link to="/" onClick={toggleMenu}>
              <h3 className="uppercase text-base font-medium hover:text-[#C09B61]">
                Home
              </h3>
            </Link>
            <Link to="/category" onClick={toggleMenu}>
              <h3 className="uppercase text-base font-medium hover:text-[#C09B61]">
                Category
              </h3>
            </Link>
            <Link to="/shop" onClick={toggleMenu}>
              <h3 className="uppercase text-base font-medium hover:text-[#C09B61]">
                Shop
              </h3>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
