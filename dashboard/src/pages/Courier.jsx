import React from "react";
import { Link } from "react-router";

const Courier = () => {
  const couriers = ["Pathao", "Cherybee", "DHL", "FedEx"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Couriers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {couriers.map((courier, index) => (
          <Link
            key={index}
            to={`/courier/${courier.toLowerCase()}`}
            className="p-6 border rounded shadow hover:bg-blue-50 text-center"
          >
            <h3 className="text-lg font-semibold">{courier}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courier;
