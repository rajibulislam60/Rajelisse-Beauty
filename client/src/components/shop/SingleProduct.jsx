import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../Container";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/product/singleproduct/${id}`
      );
      console.log(response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return (
      <div className="py-10 text-center text-2xl font-semibold">
        Loading product...
      </div>
    );
  }

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Product Image */}
          <div className="w-full md:w-[45%] h-[400px]">
            <img
              className="w-full h-full object-cover rounded-md"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-[55%] px-5">
            <h3 className="text-3xl font-semibold">{product.name}</h3>

            {/* Prices */}
            <div className="mt-3">
              {product.discountPrice > 0 ? (
                <>
                  <h4 className="text-2xl font-bold text-red-600">
                    Discount Price: {product.discountPrice} TK
                  </h4>
                  <h4 className="text-lg line-through text-gray-500">
                    Original: {product.sellingPrice} TK
                  </h4>
                </>
              ) : (
                <h4 className="text-2xl font-bold">
                  Price: {product.sellingPrice} TK
                </h4>
              )}
            </div>

            {/* Stock Info */}
            <p
              className={`mt-2 font-medium ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `In Stock: ${product.stock}`
                : "Out of Stock"}
            </p>

            {/* Quantity Control */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-[40px] py-1 font-semibold text-2xl bg-teal-600 text-white hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <h4 className="font-semibold text-2xl">{quantity}</h4>
              <button
                onClick={() =>
                  setQuantity((q) =>
                    product.stock ? Math.min(product.stock, q + 1) : q + 1
                  )
                }
                disabled={product.stock && quantity >= product.stock}
                className="w-[40px] py-1 font-semibold text-2xl bg-teal-600 text-white hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>

            {/* Description */}
            <p className="text-[16px] mt-8 leading-relaxed text-gray-600">
              {product.description || "No description available."}
            </p>

            {/* Add to Cart */}
            <button
              className="text-2xl font-semibold bg-teal-600 text-white hover:bg-teal-800 cursor-pointer py-2 w-full text-center mt-10 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
