import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormdata({ ...formdata, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", formdata.name);
    data.append("description", formdata.description);
    data.append("image", formdata.image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category/createCategory",
        data
      );
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 flex justify-center w-[80%]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Category
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Category Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter description"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
