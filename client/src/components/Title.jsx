import React from "react";

const Title = ({ titleName, titlePera }) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-semibold">{titleName}</h3>
      <p className="text-[16px] md:text-xl font-medium md:w-[500px] mx-auto text-gray-500 mt-4">
        {titlePera}
      </p>
    </div>
  );
};

export default Title;
