import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Cart = ({ className }) => {
  return (
    <div className={`bg-teal-700 rounded-lg ${className}`}>
      <div className="px-8 py-8 text-[40px] text-white">
        <FaShoppingBag />
      </div>
    </div>
  );
};

export default Cart;
