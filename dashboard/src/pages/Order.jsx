import React, { useState } from "react";

const Order = () => {
  const [selectedCourier, setSelectedCourier] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [doneOrders, setDoneOrders] = useState({});

  const couriers = ["Pathao", "Cherybee", "DHL"];

  // Dummy product data
  const products = [
    {
      id: 1,
      customer: "Rajibul Islam",
      phone: "01760707877",
      address: "Dhaka, Mirpur, Shewrapara, Road-5, House-1200",
      product: "Laptop",
      price: 28000,
    },
    {
      id: 2,
      customer: "Arif Hossain",
      phone: "01812345678",
      address: "Badda, Dhaka",
      product: "Mobile Phone",
      price: 18000,
    },
    {
      id: 3,
      customer: "Shamima Akter",
      phone: "01987654321",
      address: "Bashundhara R/A, Dhaka",
      product: "Headphone",
      price: 4000,
    },
  ];

  const handleCourierSelect = (orderId, courier) => {
    setSelectedCourier((prev) => ({ ...prev, [orderId]: courier }));
    setOpenDropdown(null);
  };

  const handleDone = (orderId) => {
    setDoneOrders((prev) => ({ ...prev, [orderId]: true }));
  };

  return (
    <div className="p-6">
      {/* Order Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3>Total Order</h3>
          <h4>1000</h4>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3>Today Order</h3>
          <h4>100</h4>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3>This Month Order</h3>
          <h4>1000</h4>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3>Pending</h3>
          <h4>50</h4>
        </div>
      </div>

      {/* Order Table */}
      <div className="border rounded p-4 shadow">
        {/* Header */}
        <ul className="grid grid-cols-6 font-bold border-b pb-2 mb-4">
          <li>Customer details</li>
          <li>Product name</li>
          <li>Total Price</li>
          <li>Courier</li>
          <li>Edit</li>
          <li>Done</li>
        </ul>

        {/* Product Rows */}
        {products.map((order) => (
          <ul
            key={order.id}
            className={`grid grid-cols-6 items-center border-b py-2 ${
              doneOrders[order.id] ? "bg-green-50" : ""
            }`}
          >
            <li>
              <h4 className="font-semibold">{order.customer}</h4>
              <h5>{order.phone}</h5>
              <p className="text-sm text-gray-600">{order.address}</p>
            </li>
            <li>{order.product}</li>
            <li>{order.price.toLocaleString()} Tk</li>
            <li className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === order.id ? null : order.id)
                }
                className={`px-3 py-2 rounded shadow w-36 text-white ${
                  selectedCourier[order.id]
                    ? "bg-green-500"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {selectedCourier[order.id] || "Select Courier"}
              </button>

              {/* Dropdown List */}
              {openDropdown === order.id && (
                <ul className="absolute mt-2 w-36 bg-white border rounded shadow z-10">
                  {couriers.map((c, i) => (
                    <li
                      key={i}
                      onClick={() => handleCourierSelect(order.id, c)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button className="px-3 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
                Edit
              </button>
            </li>
            <li>
              {doneOrders[order.id] ? (
                <button
                  disabled
                  className="px-3 py-2 bg-green-500 text-white rounded shadow"
                >
                  Done
                </button>
              ) : (
                <button
                  onClick={() => handleDone(order.id)}
                  className="px-3 py-2 bg-gray-500 text-white rounded shadow hover:bg-green-500"
                >
                  Mark Done
                </button>
              )}
            </li>
          </ul>
        ))}

        {/* Footer */}
        <div className="font-bold mt-4">
          <h3>
            Total Amount ={" "}
            {products
              .reduce((acc, item) => acc + item.price, 0)
              .toLocaleString()}{" "}
            Tk
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
