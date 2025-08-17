import React, { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <div className="w-[20%] h-screen p-4">
      <div className="h-full bg-gray-100 p-4 shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>

        <ul className="space-y-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* Products Dropdown */}
          <li>
            <div
              onClick={() => setOpenProducts(!openProducts)}
              className="cursor-pointer flex justify-between items-center px-2 py-1 rounded-md hover:bg-gray-200"
            >
              <h3 className="font-medium">Products</h3>
              <span>{openProducts ? "▲" : "▼"}</span>
            </div>

            {openProducts && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/add-category"
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`
                    }
                  >
                    Add Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-category"
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`
                    }
                  >
                    All Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-product"
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-product"
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`
                    }
                  >
                    All Product
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoice"
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Invoice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Total Completed
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
