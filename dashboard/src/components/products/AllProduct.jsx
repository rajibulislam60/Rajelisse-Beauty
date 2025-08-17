import React from "react";

const AllProduct = () => {
  // Dummy data for preview
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      description: "Latest Apple iPhone",
      sellingPrice: 999,
      discountPrice: 899,
      stock: 10,
      category: "Electronics",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Nike Shoes",
      description: "Comfortable running shoes",
      sellingPrice: 120,
      discountPrice: 100,
      stock: 20,
      category: "Fashion",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Pizza",
      description: "Delicious cheese pizza",
      sellingPrice: 15,
      discountPrice: 12,
      stock: 30,
      category: "Food",
      image: "https://via.placeholder.com/80",
    },
  ];

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
            {products.map((prod) => (
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

export default AllProduct;
