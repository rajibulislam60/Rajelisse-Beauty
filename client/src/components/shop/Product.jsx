import React from "react";
import { useNavigate } from "react-router";

const ProductItem = ({ allproducts }) => {
  const navigate = useNavigate();

  const handleClicktoId = (id) => {
    navigate(`/shop/singleproduct/${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {allproducts.map((prod) => {
        const discountPercentage =
          prod.sellingPrice && prod.discountPrice
            ? Math.round(
                ((prod.sellingPrice - prod.discountPrice) / prod.sellingPrice) *
                  100
              )
            : 0;

        return (
          <div
            key={prod._id}
            className="w-[100%] md:w-[90%] bg-white py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleClicktoId(prod._id)}
          >
            <div className="relative overflow-hidden cursor-pointer">
              {/* Show discount percentage top-right */}
              {discountPercentage > 0 && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-md">
                  -{discountPercentage}%
                </span>
              )}

              <img
                src={Array.isArray(prod.image) ? prod.image[0] : prod.image}
                alt={prod.name}
                className="transition-transform duration-300 ease-in-out hover:scale-110 h-[310px] w-full object-cover"
              />
            </div>

            <div className="text-gray-500 mt-3">
              <h4 className="text-xl font-semibold">
                Price: {prod.discountPrice} TK
              </h4>
              <h4 className="text-lg line-through text-gray-500">
                Original: {prod.sellingPrice} TK
              </h4>
              <h3 className="text-lg font-semibold">{prod.name}</h3>
              <div className="py-3 px-5">
                <button className="text-2xl font-semibold bg-teal-600 text-white hover:bg-teal-800 cursor-pointer py-2 w-full text-center rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
