import React from "react";
import Container from "./Container";
import footerLogoImage from "../images/logo3.png";
import paymentImage from "../images/img_1.png";
import { FaRegCopyright, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-15 bg-gray-200">
      <Container>
        <div>
          <div className="md:flex justify-between">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Company</h4>
              <p className="text-gray-500">
                Find a location nearest you. <br /> See Our Stores
              </p>
              <h5 className="text-gray-500">+880 1981-869112</h5>
              <h6 className="text-gray-500">rajelissebeauty@gmail.com</h6>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Useful Links</h4>
              <ul className="text-gray-500">
                <li>New Products</li>
                <li>Best Sellers</li>
                <li>Bundle & Save</li>
                <li>Online Gift Card</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Information</h4>
              <ul className="text-gray-500">
                <li>Start a Return</li>
                <li>Contact Us</li>
                <li>Shipping FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Good emails.</h4>
              <p className="text-gray-500">
                Enter your email below to be the first to know about new
                collections and product <br /> launches.
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-600 my-5"></div>
          <div className="flex justify-between gap-1 items-center">
            <div className="flex items-center md:gap-3">
              <div className="flex gap-1 items-center text-[12px] md:text-xl text-gray-500">
                <FaRegCopyright />
                <h4>Rajelisse Beauty 2025</h4>
              </div>
              <FaFacebookF />
              <FaInstagram />
            </div>
            <img
              className="w-[30px] md:w-[100px]"
              src={footerLogoImage}
              alt="Footer Logo Image"
            />
            <img className="w-[40%]" src={paymentImage} alt="Payment Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
