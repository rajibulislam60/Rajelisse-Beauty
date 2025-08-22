import React from "react";

const AddProduct = () => {
  return (
    <div className="p-6 flex justify-center w-[80%]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h2>

        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Enter description"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Selling Price */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Selling Price
            </label>
            <input
              type="number"
              placeholder="Enter selling price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Discount Price */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Discount Price
            </label>
            <input
              type="number"
              placeholder="Enter discount price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Stock
            </label>
            <input
              type="number"
              placeholder="Enter stock quantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Food</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
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

export default AddProduct;
