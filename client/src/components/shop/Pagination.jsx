import React from "react";

const Pagination = ({ total, perPage, activePage, setActivePage }) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
        disabled={activePage === 1}
        className="px-4 py-2 cursor-pointer hover:bg-teal-700 hover:text-white border rounded-md"
      >
        Prev
      </button>

      <ul className="flex items-center gap-2">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-3 py-2 border rounded-md cursor-pointer transition-all ${
              activePage === page
                ? "bg-teal-700 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
        disabled={activePage === totalPages}
        className="px-4 py-2 cursor-pointer hover:bg-teal-700 hover:text-white border rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
