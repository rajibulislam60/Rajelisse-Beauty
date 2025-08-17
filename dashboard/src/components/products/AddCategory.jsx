import React from "react";

const AddCategory = () => {
  return (
    <div className="p-6 flex justify-center w-[80%]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Category
        </h2>

        <form>
          {/* Category Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
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
            <input type="file" className="w-full border rounded-lg px-3 py-2" />
          </div>

          {/* Submit Button */}
          <button
            type="button"
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
