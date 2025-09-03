import axios from "axios";
import React, { useEffect, useState } from "react";

const ShopCate = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory"
      );
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full w-[20%] rounded-md shadow px-3 py-8">
      <h2 className="text-3xl font-semibold">Category</h2>
      <ul className="px-2 py-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="text-xl font-medium py-1 hover:text-gray-700 text-gray-500 cursor-pointer"
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCate;
