import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    sellingPrice: "",
    discountPrice: "",
  });

  const [images, setImages] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory"
      );
      setAllCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // multiple images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formdata).forEach((key) => {
        data.append(key, formdata[key]);
      });

      images.forEach((img) => {
        data.append("images", img);
      });

      const response = await axios.post(
        "http://localhost:5000/api/v1/product/createProduct",
        data
      );

      console.log("Product Added:", response.data);

      // reset form
      setFormdata({
        name: "",
        description: "",
        category: "",
        stock: "",
        sellingPrice: "",
        discountPrice: "",
      });
      setImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-6 flex justify-center w-[80%]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
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
              name="description"
              rows="3"
              value={formdata.description}
              onChange={handleChange}
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
              name="sellingPrice"
              value={formdata.sellingPrice}
              onChange={handleChange}
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
              name="discountPrice"
              value={formdata.discountPrice}
              onChange={handleChange}
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
              name="stock"
              value={formdata.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formdata.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select category</option>
              {allCategories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
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

export default AddProduct;
