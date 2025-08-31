import React from "react";

const FeatureDetails = ({ Icon, nameDetails, details }) => {
  return (
    <div className="text-center w-full md:w-[24%] p-4">
      <div className="text-6xl grid md:flex items-center justify-center text-[#C09B61] mb-2">
        <Icon aria-label="Free Shopping Icon" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{nameDetails}</h3>
      <p className="text-sm text-gray-600">{details}</p>
    </div>
  );
};

export default FeatureDetails;
