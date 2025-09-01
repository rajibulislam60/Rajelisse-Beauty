import React from "react";
import { useNavigate } from "react-router";

const ProductItem = ({ allproducts }) => {
  const navigate = useNavigate();

  const handleClicktoId = ({ item }) => {
    navigate(`/shop/singleproduct/${item}`);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {allproducts.map((prod) => (
        <div
          key={prod.id}
          className="w-[100%] md:w-[90%]  bg-white py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleClicktoId(prod._id)}
        >
          <div className="overflow-hidden cursor-pointer">
            <img
              src={prod.image}
              alt={prod.name}
              className="transition-transform duration-300 ease-in-out hover:scale-110 h-[310px] w-full object-cover"
            />
          </div>
          <div className="text-gray-500 mt-3">
            <h4 className="text-xl font-semibold">
              Price: {prod.sellingPrice} TK
            </h4>
            <h3 className="text-lg font-semibold">{prod.name}</h3>
            <div className="py-3 px-5">
              <button className="text-2xl font-semibold bg-teal-600 text-white hover:bg-teal-800 cursor-pointer py-2 w-full text-center rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
