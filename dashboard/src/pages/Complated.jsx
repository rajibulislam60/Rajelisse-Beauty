import React, { useState } from "react";

const Complated = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState("");

  // Dummy company info
  const company = {
    name: "Tech Solutions Ltd.",
    address: "Bashundhara R/A, Dhaka, Bangladesh",
    phone: "+880 1234-567890",
    email: "info@techsolutions.com",
  };

  // Dummy completed orders
  const orders = [
    {
      id: 1,
      customer: "Rajibul Islam",
      phone: "01760707877",
      address: "Dhaka, Mirpur, Shewrapara",
      product: "Laptop",
      price: 28000,
      status: "Completed",
    },
    {
      id: 2,
      customer: "Arif Hossain",
      phone: "01812345678",
      address: "Badda, Dhaka",
      product: "Mobile Phone",
      price: 18000,
      status: "Completed",
    },
    {
      id: 3,
      customer: "Shamima Akter",
      phone: "01987654321",
      address: "Bashundhara R/A, Dhaka",
      product: "Headphone",
      price: 4000,
      status: "Completed",
    },
  ];

  // Handle select all
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((o) => o.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual select
  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  // Filter by search
  const filteredOrders = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase())
  );

  // Print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      {/* Header: Company & Print */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">{company.name}</h2>
          <p>{company.address}</p>
          <p>Phone: {company.phone}</p>
          <p>Email: {company.email}</p>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Print Completed Orders
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search completed orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-1/3"
        />
      </div>

      {/* Table */}
      <div className="border rounded shadow overflow-hidden">
        <ul className="grid grid-cols-6 font-bold border-b bg-gray-100 p-2">
          <li>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />{" "}
            Select
          </li>
          <li>Customer</li>
          <li>Product</li>
          <li>Price</li>
          <li>Address</li>
          <li>Status</li>
        </ul>

        {filteredOrders.map((order) => (
          <ul
            key={order.id}
            className="grid grid-cols-6 items-center border-b p-2"
          >
            <li>
              <input
                type="checkbox"
                checked={selectedRows.includes(order.id)}
                onChange={() => toggleSelect(order.id)}
              />
            </li>
            <li>
              <h4 className="font-semibold">{order.customer}</h4>
              <h5>{order.phone}</h5>
            </li>
            <li>{order.product}</li>
            <li>{order.price.toLocaleString()} Tk</li>
            <li className="text-sm">{order.address}</li>
            <li>
              <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded">
                {order.status}
              </span>
            </li>
          </ul>
        ))}

        {/* Footer */}
        <div className="p-4 font-bold text-right">
          Total Completed Order Amount ={" "}
          {filteredOrders
            .reduce((acc, item) => acc + item.price, 0)
            .toLocaleString()}{" "}
          Tk
        </div>
      </div>
    </div>
  );
};

export default Complated;
