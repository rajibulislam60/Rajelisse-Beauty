import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/product/allproducts"
      );
      console.log(response);
      setAllproducts(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/product/deleteProduct/${id}`
      );

      setAllproducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="p-6 w-[80%] h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-700">
                Image
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Description
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Category
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Selling Price
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Discount Price
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                Stock
              </th>
              <th className="p-3 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((prod) => (
              <tr key={prod.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">{prod.name}</td>
                <td className="p-3 text-gray-600">{prod.description}</td>
                <td className="p-3 text-gray-600">{prod.category}</td>
                <td className="p-3 text-gray-600">${prod.sellingPrice}</td>
                <td className="p-3 text-gray-600">${prod.discountPrice}</td>
                <td className="p-3 text-gray-600">{prod.stock}</td>
                <td className="p-3 text-center space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
