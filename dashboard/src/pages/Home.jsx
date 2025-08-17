import React from "react";

const Home = () => {
  return (
    <div className="flex w-[80%]">
      {/* Main Content */}
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold mt-2">85</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold mt-2">45</p>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">John Doe</td>
                <td className="p-2 border">iPhone 14</td>
                <td className="p-2 border text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">Jane Smith</td>
                <td className="p-2 border">Samsung TV</td>
                <td className="p-2 border text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="p-2 border">3</td>
                <td className="p-2 border">Michael</td>
                <td className="p-2 border">Headphones</td>
                <td className="p-2 border text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
