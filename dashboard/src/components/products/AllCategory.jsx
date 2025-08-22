import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCategory = () => {
  // Dummy data for design preview
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory"
      );
      console.log(response);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="p-6 w-[80%]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Categories</h2>

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
              <th className="p-3 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">{cat.name}</td>
                <td className="p-3 text-gray-600">{cat.description}</td>
                <td className="p-3 text-center space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
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

export default AllCategory;
