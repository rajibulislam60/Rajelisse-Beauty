import React from "react";

const ShopCate = () => {
  return (
    <div className="h-full w-[20%] rounded-md shadow px-3 py-8">
      <h2 className="text-3xl font-semibold">Category</h2>
      <ul className="px-2 py-2">
        <li className="text-xl font-medium py-1 hover:text-gray-700 text-gray-500 cursor-pointer">
          Body Care
        </li>
        <li className="text-xl font-medium py-1 hover:text-gray-700 text-gray-500 cursor-pointer">
          Face Care
        </li>
        <li className="text-xl font-medium py-1 hover:text-gray-700 text-gray-500 cursor-pointer">
          Skin Care
        </li>
        <li className="text-xl font-medium py-1 hover:text-gray-700 text-gray-500 cursor-pointer">
          Hair Care
        </li>
      </ul>
    </div>
  );
};

export default ShopCate;
