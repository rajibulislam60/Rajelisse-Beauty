import React, { useState } from "react";

const Complated = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState("");

  // Company Info
  const company = {
    name: "RSCF Solutions.",
    address: "Kazipara, Mirpur, Dhaka, Bangladesh",
    phone: "+880 1981-869112",
    email: "info@rscfsolutions.com",
  };

  // Dummy Completed Orders
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

  // Select All
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((o) => o.id));
    }
    setSelectAll(!selectAll);
  };

  // Select Single
  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  // Search Filter
  const filteredOrders = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase())
  );

  // Print Function
  const handlePrint = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one order to print.");
      return;
    }
    window.print();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 no-print">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">{company.name}</h2>
          <p className="text-gray-600">{company.address}</p>
          <p className="text-gray-600">📞 {company.phone}</p>
          <p className="text-gray-600">✉️ {company.email}</p>
        </div>
        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow hover:from-green-700 hover:to-emerald-700"
        >
          🖨️ Print Completed Orders
        </button>
      </div>

      {/* Search */}
      <div className="mb-4 flex justify-between items-center no-print">
        <input
          type="text"
          placeholder="🔍 Search completed orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-sm w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg shadow overflow-hidden no-print">
        <ul className="grid grid-cols-6 font-bold border-b bg-gradient-to-r from-gray-100 to-gray-200 p-3">
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
            className="grid grid-cols-6 items-center border-b p-3 hover:bg-gray-50 transition"
          >
            <li>
              <input
                type="checkbox"
                checked={selectedRows.includes(order.id)}
                onChange={() => toggleSelect(order.id)}
              />
            </li>
            <li>
              <h4 className="font-semibold text-gray-800">{order.customer}</h4>
              <h5 className="text-sm text-gray-500">{order.phone}</h5>
            </li>
            <li className="text-gray-700">{order.product}</li>
            <li className="font-semibold text-green-600">
              {order.price.toLocaleString()} Tk
            </li>
            <li className="text-sm text-gray-600">{order.address}</li>
            <li>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-700 font-medium rounded-full">
                ✅ {order.status}
              </span>
            </li>
          </ul>
        ))}

        <div className="p-4 font-bold text-right bg-gray-50">
          Total Completed Orders ={" "}
          {filteredOrders
            .reduce((acc, item) => acc + item.price, 0)
            .toLocaleString()}{" "}
          Tk
        </div>
      </div>

      {/* Print Section */}
      <div className="print-only">
        {orders
          .filter((o) => selectedRows.includes(o.id))
          .map((order) => (
            <div key={order.id} className="a4-page border p-8 rounded-lg mb-6">
              {/* Company Info */}
              <div className="mb-6 border-b pb-4 text-center">
                <h2 className="text-3xl font-bold text-green-700">
                  {company.name}
                </h2>
                <p>{company.address}</p>
                <p>📞 {company.phone}</p>
                <p>✉️ {company.email}</p>
              </div>

              {/* Invoice Title */}
              <h3 className="text-xl font-semibold mb-4 text-gray-700 underline">
                Completed Order Invoice
              </h3>

              {/* Customer & Order Info */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <p>
                    <b>Customer:</b> {order.customer}
                  </p>
                  <p>
                    <b>Phone:</b> {order.phone}
                  </p>
                  <p>
                    <b>Address:</b> {order.address}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <b>Product:</b> {order.product}
                  </p>
                  <p>
                    <b>Price:</b>{" "}
                    <span className="text-green-600 font-bold">
                      {order.price.toLocaleString()} Tk
                    </span>
                  </p>
                  <p>
                    <b>Delivery Charge:</b> 100 Tk
                  </p>
                  <p>
                    <b>Total:</b>{" "}
                    <span className="text-green-700 font-bold">
                      {(order.price + 100).toLocaleString()} Tk
                    </span>
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-4 text-right text-gray-600 text-sm">
                <p>Thank you for your purchase! 💚</p>
                <p>Powered by {company.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Complated;
