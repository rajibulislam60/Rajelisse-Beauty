import React from "react";

const ProductItem = ({ src, price, itemName }) => {
  return (
    <div className="w-[100%] md:w-[90%] h-[420px]  bg-white py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden cursor-pointer">
        <img
          src={src}
          alt={itemName}
          className="transition-transform duration-300 ease-in-out hover:scale-110 h-[310px] w-full object-cover"
        />
      </div>
      <div className="text-gray-500 mt-3">
        <h4 className="text-xl font-semibold">Price: {price} TK</h4>
        <h3 className="text-lg font-semibold">{itemName}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
